import { ICounterEntity } from "./counter.domain";

export class CounterModel implements ICounterEntity {
  value: number;

  public constructor(initialValue: number) {
    this.value = initialValue;
  }

  public increment() {
    this.value++;
  }

  public decrement() {
    this.value--;
  }
}
