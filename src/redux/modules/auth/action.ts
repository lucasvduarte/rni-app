import {
  getAuthStorage,
  getThemeStorage,
  setAuthStorage,
  setThemeStorage,
} from "../../../storage";
import { AppDispatch, GetRootState } from "../../store";
import {
  putAuth,
  putAuthToken,
  TAuth,
  putClearAuth,
  putUser,
  TUser,
  putTheme,
  TTheme,
} from "./slice";

export const getLogin = () => async (dispatch: AppDispatch) => {
  try {
    const auth = await getAuthStorage();

    if (auth) {
      dispatch(putAuth(auth));
      return auth;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export const getTheme = () => async (dispatch: AppDispatch) => {
  try {
    const theme = await getThemeStorage();

    if (theme) {
      dispatch(putTheme(theme));
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const setLogin =
  (auth: TAuth) => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      await setAuthStorage(auth);
      dispatch(putAuth(auth));

      return true;
    } catch (error) {
      return false;
    }
  };

export const setToken = (token?: string) => async (dispatch: AppDispatch) => {
  try {
    if (!token) {
      return false;
    }

    dispatch(putAuthToken(token));

    return true;
  } catch (error) {
    return false;
  }
};

export const setUser = (value: TUser) => async (dispatch: AppDispatch) => {
  try {
    dispatch(putUser(value));

    return true;
  } catch (error) {
    return false;
  }
};

export const clearAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(putClearAuth());
    return true;
  } catch (error) {
    return false;
  }
};

export const setTheme = (value: TTheme) => async (dispatch: AppDispatch) => {
  try {
    setThemeStorage(value);
    dispatch(putTheme(value));
    return true;
  } catch (error) {
    return false;
  }
};
