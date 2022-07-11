import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ICounterEntity } from "../domain";
import { increment, decrement } from "./redux.framework";

export const useLibRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);

  const dispatchIncrement = React.useCallback((counter: ICounterEntity) => {
    dispatch(increment(counter));
  }, []);

  const dispatchDecrement = React.useCallback((counter: ICounterEntity) => {
    dispatch(decrement(counter));
  }, []);

  return {
    counter,
    dispatchIncrement,
    dispatchDecrement,
  };
};
