import { IResult } from './result.interface';

export class Result<Type> implements IResult<Type> {
  value: Type;
  isSuccess: boolean;
  isFailure: boolean;
  error: string;
  code: string;

  private constructor(
    value: Type,
    isSuccess: boolean,
    error: string,
    code: string,
  ) {
    this.value = value;
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this.code = code;
  }

  private static create<Type>(
    value: Type,
    isSuccess: boolean,
    error: string,
    code: string,
  ): IResult<Type> {
    return new Result<Type>(value, isSuccess, error, code);
  }

  static success<Type>(value: Type): IResult<Type> {
    return Result.create(value, true, '', '');
  }

  static fail<Type>(error: string, code: string): IResult<Type> {
    return Result.create(null, false, error, code);
  }
}
