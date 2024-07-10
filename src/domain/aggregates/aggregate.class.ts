import { Errors } from '../../errors.enum';
import { Result } from '../../result.class';
import { IResult } from '../../result.interface';
import { OperationEntity } from '../entities/operation.entity';
import { NumberObjectValue } from '../object-value/number.object-value';
import { IAggregate } from './aggregate.interface';

export class Aggregate extends IAggregate {
  sumOperation(number1: number, number2: number): IResult<number> {
    const num1 = new NumberObjectValue(number1);
    const num2 = new NumberObjectValue(number2);

    if (num1.validate().isFailure) {
      return Result.fail<number>(num1.validate().error, Errors.INVALID_NUMBER);
    }

    if (num2.validate().isFailure) {
      return Result.fail<number>(num2.validate().error, Errors.INVALID_NUMBER);
    }

    const result = new OperationEntity(num1, num2).sum();
    return Result.success<number>(result);
  }
}
