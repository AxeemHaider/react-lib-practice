import { ICounterEntity } from "./counter.domain";

export interface ICounterStore {
  counter: ICounterEntity;

  increment(counter: ICounterEntity): void;
  decrement(counter: ICounterEntity): void;
}
