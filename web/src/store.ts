import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "core";

const store = configureStore({
  reducer: {
    counter: reducer,
  },
});

export default store;
