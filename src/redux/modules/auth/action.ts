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
  putClearAuth,
  putUser,
  putTheme,
  initialState,
  putPassword,
  putIsSingIn,
  putEnterpriseSelect,
} from "./slice";
import { TItem, TTheme, TUser } from "./type";

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

    dispatch(putTheme(theme));

    return false;
  } catch (error) {
    return false;
  }
};

export const setToken =
  (token?: string) => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      if (!token) {
        return false;
      }
      const { email, password, theme } = getState().auth;
      await setAuthStorage({ email, password, theme, token });
      dispatch(putAuthToken(token));

      return true;
    } catch (error) {
      return false;
    }
  };

export const setUser =
  (user: TUser, email: string) =>
  async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { password, theme, token } = getState().auth;
      await setAuthStorage({ password, theme, token, email });
      dispatch(putUser(user));

      return true;
    } catch (error) {
      return false;
    }
  };

export const clearUser = () => async (dispatch: AppDispatch) => {
  try {
    await setAuthStorage({ ...initialState });
    await dispatch(putClearAuth());

    return true;
  } catch (error) {
    return false;
  }
};

export const setPassword =
  (password: string) =>
  async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { theme, token, email } = getState().auth;
      await setAuthStorage({ theme, token, email, password });
      dispatch(putPassword(password));

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

export const setIsSingIn = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(putIsSingIn());
    return true;
  } catch (error) {
    return false;
  }
};

export const setEnterpriseSelect =
  (item: TItem) => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { isSingIn } = getState().auth;
      if (isSingIn) {
        dispatch(setIsSingIn());
      }
      dispatch(putEnterpriseSelect(item));

      return true;
    } catch (error) {
      return false;
    }
  };
