import { IResult } from '../../result.interface';

export interface IAggregate {
  sumOperation(number1: number, number2: number): IResult<number>;
}
