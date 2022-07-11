import { ICounterStore } from "../domain/counter.store";

export class CounterUseCase {
  public constructor(private readonly store: ICounterStore) {}

  public getValue() {
    return this.store.counter.value;
  }

  public increment() {
    this.store.counter.value++;
  }

  public decrement() {
    if (this.getValue() === 0) {
      return;
    }

    this.store.counter.value;
  }
}
