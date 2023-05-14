import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { ToastStyled } from "./components";
import { PrivateNavigation, PublicNavigation } from "./navigation";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getLogin, getTheme, setToken } from "./redux/modules/auth/action";
import { RootState } from "./redux/store";
import themes from "./themes";
import { getToken } from "./pages/auth/services/Token";
import { useQuery } from "react-query";
import * as Network from "expo-network";
import { setIpStorage } from "./storage";

export default function App() {
  const dispatch = useAppDispatch();
  const deviceTheme = useColorScheme();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { isLoading } = useQuery({
    queryKey: "getToken",
    queryFn: getToken,
    //refetchInterval: 50 * 60 * 1000,
    staleTime: 50 * 60 * 1000,
    refetchIntervalInBackground: false,
    onSuccess: ({ token }) => {
      dispatch(setToken(token));
    },
  });

  useLayoutEffect(() => {
    dispatch(getTheme());
  }, [dispatch]);

  useLayoutEffect(() => {
    dispatch(getLogin());
  }, [dispatch]);

  const getIpAddressAsync = useCallback(async () => {
    const ip = await Network.getIpAddressAsync();
    setIpStorage(ip || "");
  }, []);

  useEffect(() => {
    getIpAddressAsync();
  }, [getIpAddressAsync]);

  const getNetworkStateAsync = useCallback(async () => {
    const response = await Network.getNetworkStateAsync();
  }, []);

  useEffect(() => {
    getNetworkStateAsync();
  }, [getNetworkStateAsync]);

  const themeSelect = auth.theme || deviceTheme || "light";

  if (isLoading && !auth.token) {
    return null;
  }

  return (
    <ThemeProvider theme={themes[themeSelect]}>
      <NavigationContainer>
        {auth.user?.cliente.cpfcnpj ? (
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
