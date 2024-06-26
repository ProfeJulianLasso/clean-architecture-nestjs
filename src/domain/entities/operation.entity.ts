import { NumberObjectValue } from '../object-value/number.object-value';

export class OperationEntity {
  private readonly num1: NumberObjectValue;
  private readonly num2: NumberObjectValue;

  constructor(num1: NumberObjectValue, num2: NumberObjectValue) {
    this.num1 = num1;
    this.num2 = num2;
  }

  sum(): number {
    return this.num1.value + this.num2.value;
  }
}
