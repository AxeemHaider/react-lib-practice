import { ICounterStore } from "../domain/counter.store";

export class CounterUseCase {
  public constructor(private store: ICounterStore) {}

  public getValue() {
    return this.store.counter.value;
  }

  public increment() {
    console.log(this.getValue(), this.getValue() + 1);
    this.store.increment({ value: this.getValue() + 1 });
  }

  public decrement() {
    if (this.getValue() === 0) {
      return;
    }

    this.store.increment({ value: this.getValue() - 1 });
  }
}
