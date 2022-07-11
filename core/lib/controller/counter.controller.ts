import React from "react";
import { CounterUseCase } from "../useCase";

export const useCounterController = () => {
  const getValue = React.useCallback(() => {
    const counter = new CounterUseCase(0);
    return counter.count();
  }, []);

  const increment = React.useCallback(() => {
    const counter = new CounterUseCase(0);
    counter.increment();
  }, []);

  const decrement = React.useCallback(() => {
    const counter = new CounterUseCase(0);
    counter.decrement();
  }, []);

  return {
    getValue,
    increment,
    decrement,
  };
};
