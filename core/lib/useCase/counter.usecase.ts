import { ICounterStore } from "../domain/counter.store";

export class CounterUseCase {
  public constructor(private store: ICounterStore) {}

  public getValue() {
    return this.store.counter.value;
  }

  public increment() {
    this.store.increment({ value: this.getValue() + 1 });
  }

  public decrement() {
    if (this.getValue() === 0) {
      return;
    }

    this.store.increment({ value: this.getValue() - 1 });
  }
}
