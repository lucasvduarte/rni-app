import { TClient, TClientSap } from "../../../pages/account/services/User/type";
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
  putIsSingIn,
  putEnterpriseSelect,
  putClient,
  putClientSap,
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
  (user: TUser, email: string, rememberPassword: string | undefined) =>
  async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { theme, token, password } = getState().auth;
      await setAuthStorage({
        password: rememberPassword || password,
        theme,
        token,
        email,
      });
      dispatch(putUser(user));

      return true;
    } catch (error) {
      return false;
    }
  };

export const clearUser =
  () => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const { token } = getState().auth;
      await setAuthStorage({ ...initialState, token });
      await dispatch(putClearAuth());

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

export const setClient = (client: TClient) => async (dispatch: AppDispatch) => {
  try {
    dispatch(putClient(client));

    return true;
  } catch (error) {
    return false;
  }
};

export const setClientSap =
  (clientSap: TClientSap[]) => async (dispatch: AppDispatch) => {
    try {
      dispatch(putClientSap(clientSap));

      return true;
    } catch (error) {
      return false;
    }
  };
