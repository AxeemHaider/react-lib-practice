import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounterEntity } from "../domain";

const initialState: ICounterEntity = {
  value: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state, { payload }: PayloadAction<any>) => {
      return payload;
    },
    decrement: (state, { payload }: PayloadAction<any>) => {
      state = payload;
    },
  },
});

export const { increment, decrement } = slice.actions;
export const reducer = slice.reducer;
