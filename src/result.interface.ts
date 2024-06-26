export interface IResult<Type> {
  readonly value: Type;
  readonly isSuccess: boolean;
  readonly isFailure: boolean;
  readonly error: string;
  readonly code: string;
}
