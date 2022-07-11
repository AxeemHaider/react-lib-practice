import { createSlice } from "@reduxjs/toolkit";
import { ICounterEntity } from "../domain";

const initialState: ICounterEntity = {
  value: 0,
};

const slice = createSlice({
  name: "lib",
  initialState,

  reducers: {
    increment: (state) => {
      state.value++;
    },
  },
});
