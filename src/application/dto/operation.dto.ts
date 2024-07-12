export class OperationDto {
  readonly id: string;
  readonly number1: number;
  readonly number2: number;
  readonly result: number;

  constructor(id: string, number1: number, number2: number, result: number) {
    this.id = id;
    this.number1 = number1;
    this.number2 = number2;
    this.result = result;
  }
}
