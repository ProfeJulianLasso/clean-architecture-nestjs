import { Errors } from '../../errors.enum';
import { Result } from '../../result.class';
import { IResult } from '../../result.interface';

export class NumberObjectValue {
  public readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  validate(): IResult<boolean> {
    if (isNaN(this.value)) {
      return Result.fail<boolean>(
        `El valor ${this.value} no es un número`,
        Errors.INVALID_NUMBER,
      );
    }
    return Result.success<boolean>(true);
  }
}
