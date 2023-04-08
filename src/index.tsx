import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { ToastStyled } from "./components";
import { useBiometric } from "./hooks";
import { PrivateNavigation, PublicNavigation } from "./navigation";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getLogin, getTheme, setToken } from "./redux/modules/auth/action";
import { RootState } from "./redux/store";
import themes from "./themes";
import { getToken } from "./pages/auth/services";
import { useQuery } from "react-query";

export default function App() {
  const dispatch = useAppDispatch();
  const deviceTheme = useColorScheme();
  const { isBiometricAvailableCallback } = useBiometric();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { data } = useQuery({
    queryKey: "getToken",
    queryFn: getToken,
    onSuccess: () => {
      dispatch(setToken(data?.token));
    },
  });

  useEffect(() => {
    /**
     *
     * aqui num seria já passando o isBiometricAvailableCallback(auth) ?
     */
    if (!auth.user?.name) {
      dispatch(getLogin()).then((response) => {
        if (response) {
          isBiometricAvailableCallback(response);
        }
      });
    }
  }, [dispatch, isBiometricAvailableCallback]);

  useLayoutEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  const themeSelect = auth.theme || deviceTheme || "light";

  return (
    <ThemeProvider theme={themes[themeSelect]}>
      <NavigationContainer>
        {auth.email && auth.user?.name ? (
          <PrivateNavigation />
        ) : (
          <PublicNavigation />
        )}
        <StatusBar style={themeSelect === "dark" ? "light" : "dark"} />
      </NavigationContainer>
      <ToastStyled />
    </ThemeProvider>
  );
}
