import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICounterEntity } from "../domain";
import {
  increment as incrementAction,
  decrement as decrementAction,
} from "./redux.framework";

export const useLibRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: { counter: ICounterEntity }) => state.counter
  );

  const counterValue = useSelector((state: any) => state.counter.value);

  console.log(counter, counterValue);

  const increment = React.useCallback((counter: ICounterEntity) => {
    dispatch(incrementAction(counter));
  }, []);

  const decrement = React.useCallback((counter: ICounterEntity) => {
    dispatch(decrementAction(counter));
  }, []);

  return {
    counter,
    increment,
    decrement,
  };
};
