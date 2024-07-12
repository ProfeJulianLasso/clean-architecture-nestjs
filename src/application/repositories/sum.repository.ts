export abstract class ISumRepository {
  abstract addOperationSum(
    number1: number,
    number2: number,
    result: number,
  ): Promise<void>;
}
