import React from "react";
import { ICounterStore } from "../domain/counter.store";
import { CounterUseCase } from "../useCase";

export const useCounterController = (store: ICounterStore) => {
  const getValue = React.useCallback(() => {
    const counter = new CounterUseCase(store);
    return counter.getValue();
  }, [store]);

  const increment = React.useCallback(() => {
    const counter = new CounterUseCase(store);
    counter.increment();
  }, [store]);

  const decrement = React.useCallback(() => {
    const counter = new CounterUseCase(store);
    counter.decrement();
  }, [store]);

  return {
    getValue,
    increment,
    decrement,
  };
};
