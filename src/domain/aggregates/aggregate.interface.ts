import { IResult } from '../../result.interface';

export abstract class IAggregate {
  abstract sumOperation(number1: number, number2: number): IResult<number>;
}
