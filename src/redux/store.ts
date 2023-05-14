import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./modules/auth/slice";
import attendanceReducer from "./modules/attendance/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    attendance: attendanceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type GetRootState = () => RootState;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
