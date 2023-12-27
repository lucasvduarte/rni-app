import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import { FullLoading, ToastStyled } from "./components";
import { PrivateNavigation, PublicNavigation } from "./navigation";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { getLogin, getTheme, setToken } from "./redux/modules/auth/action";
import { RootState } from "./redux/store";
import themes from "./themes";
import { getToken } from "./pages/auth/services/Token";
import { useQuery } from "react-query";
import * as Network from "expo-network";
import { setIpStorage } from "./storage";
import * as SplashScreen from "expo-splash-screen";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const dispatch = useAppDispatch();
  const deviceTheme = useColorScheme();
  const auth = useAppSelector((state: RootState) => {
    return state.auth;
  });

  const { isLoading } = useQuery({
    queryKey: "getToken",
    queryFn: getToken,
    staleTime: 50 * 60 * 1000,
    refetchInterval: 51 * 60 * 1000,
    refetchIntervalInBackground: true,
    retry: 3,
    onSuccess: async ({ token }) => {
      await SplashScreen.hideAsync();
      dispatch(setToken(token));
    },
    onError: (error) => {
      Toast.show({
        type: "errorToast",
        props: { error },
        autoHide: false,
      });
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

  if (!auth.token) {
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
      {isLoading && <FullLoading />}
    </ThemeProvider>
  );
}
