import { CounterModel } from "../domain";

export class CounterUseCase {
  private readonly counterModel: CounterModel;

  public constructor(initialNumber: number) {
    this.counterModel = new CounterModel(initialNumber);
  }

  public count() {
    return this.counterModel.value;
  }

  public increment() {
    this.counterModel.increment();
  }

  public decrement() {
    if (this.count() === 0) {
      return;
    }

    this.counterModel.decrement();
  }
}
