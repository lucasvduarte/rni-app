import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const incrementSlice = (state: Draft<CounterState>) => {
  state.value += 1;
};

const decrementSlice = (state: Draft<CounterState>) => {
  state.value -= 1;
};

const incrementByAmountSlice = (
  state: Draft<CounterState>,
  action: PayloadAction<number>
) => {
  state.value += action.payload;
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: incrementSlice,
    decrement: decrementSlice,
    incrementByAmount: incrementByAmountSlice,
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;
export default slice.reducer;
