import { AppDispatch, GetRootState } from "../../store";
import { increment, decrement, incrementByAmount } from "./slice";

export const putIncrement = () => async (dispatch: AppDispatch) => {
  try {
    await dispatch(increment());
    return true;
  } catch (error) {
    return false;
  }
};

export const putDecrement = () => async (dispatch: AppDispatch) => {
  try {
    await dispatch(decrement());
    return true;
  } catch (error) {
    return false;
  }
};
export const putIncrementIsOld =
  (amount: number) => async (dispatch: AppDispatch, getState: GetRootState) => {
    try {
      const currentValue = getState().counter.value;
      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
      }
      return true;
    } catch (error) {
      return false;
    }
  };
