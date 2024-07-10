import { ISumRepository } from '../../../application/repositories/sum.repository';

export class SumRepository extends ISumRepository {
  addOperationSum(number1: number, number2: number, result: number): void {
    console.log(`Sum of ${number1} and ${number2} is ${result}`);
  }
}
