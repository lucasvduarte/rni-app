import AsyncStorage from "@react-native-async-storage/async-storage";
import { TAuth } from "../redux/modules/auth/type";
export const authStorage = "@authStorage";
export const themeStorage = "@themeStorage";

export const getAuthStorage = async () => {
  const jsonValue = await AsyncStorage.getItem(authStorage);
  const auth: TAuth | null = JSON.parse(jsonValue || `null`);
  return auth;
};

export const setAuthStorage = async (auth: TAuth) => {
  return await AsyncStorage.setItem(authStorage, JSON.stringify(auth));
};

export const getThemeStorage = async () => {
  const value = await AsyncStorage.getItem(themeStorage);
  if (value === "dark" || value === "light") {
    return value;
  }
  return "light";
};

export const setThemeStorage = async (theme: "dark" | "light") => {
  return await AsyncStorage.setItem(themeStorage, theme);
};
