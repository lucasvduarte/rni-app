import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { TAuth, TItem, TTheme, TUser } from "./type";

export const initialState: TAuth = {
  password: undefined,
  token: "",
  email: "",
  theme: undefined,
  isSingIn: false,
  enterpriseSelect: undefined,
};

const putAuthSlice = (state: Draft<TAuth>, action: PayloadAction<TAuth>) => {
  const { password, token, email, theme } = action.payload;
  state.password = password;
  state.token = token;
  state.email = email;
  state.theme = theme;
};

const putAuthTokenSlice = (
  state: Draft<TAuth>,
  action: PayloadAction<string>
) => {
  state.token = action.payload;
};

const putClearAuthSlice = (state: Draft<TAuth>) => {
  state.password = undefined;
  state.email = "";
  state.user = undefined;
  state.theme = undefined;
  state.enterpriseSelect = undefined;
  state.isSingIn = false;
};

const putUserSlice = (state: Draft<TAuth>, action: PayloadAction<TUser>) => {
  state.user = action.payload;
  state.isSingIn = true;
};

const putIsSingInSlice = (state: Draft<TAuth>) => {
  state.isSingIn = false;
};

const putEnterpriseSelectSlice = (
  state: Draft<TAuth>,
  action: PayloadAction<TItem>
) => {
  state.enterpriseSelect = action.payload;
};

const putPasswordSlice = (
  state: Draft<TAuth>,
  action: PayloadAction<string>
) => {
  state.password = action.payload;
};

const putThemeSlice = (
  state: Draft<TAuth>,
  action: PayloadAction<TTheme | undefined>
) => {
  state.theme = action.payload;
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    putAuth: putAuthSlice,
    putAuthToken: putAuthTokenSlice,
    putClearAuth: putClearAuthSlice,
    putUser: putUserSlice,
    putPassword: putPasswordSlice,
    putTheme: putThemeSlice,
    putIsSingIn: putIsSingInSlice,
    putEnterpriseSelect: putEnterpriseSelectSlice,
  },
});

export const {
  putAuth,
  putAuthToken,
  putClearAuth,
  putUser,
  putPassword,
  putTheme,
  putIsSingIn,
  putEnterpriseSelect,
} = slice.actions;
export default slice.reducer;
