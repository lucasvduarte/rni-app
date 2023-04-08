import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
  name: string;
};

export type TTheme = "light" | "dark";

export type TAuth = {
  email: string;
  password?: string;
  token?: string;
  user?: TUser;
  theme?: TTheme;
};

const initialState: TAuth = {
  email: "",
  token: "",
  theme: undefined,
};

const putAuthSlice = (state: Draft<TAuth>, action: PayloadAction<TAuth>) => {
  const { email, password, user } = action.payload;
  state.email = email;
  state.user = user;
  if (password) {
    state.password = password;
  }
};

const putAuthTokenSlice = (
  state: Draft<TAuth>,
  action: PayloadAction<string>
) => {
  state.token = action.payload;
};

const putClearAuthSlice = (state: Draft<TAuth>) => {
  state = initialState;
};

const putUserSlice = (state: Draft<TAuth>, action: PayloadAction<TUser>) => {
  state.user = action.payload;
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
    putTheme: putThemeSlice,
  },
});

export const { putAuth, putAuthToken, putClearAuth, putUser, putTheme } =
  slice.actions;
export default slice.reducer;
