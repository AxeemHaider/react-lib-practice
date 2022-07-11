import { ICounterEntity } from "./counter.domain";

export interface ICounterStore {
  counter: ICounterEntity;

  increment(): void;
  decrement(): void;
}
