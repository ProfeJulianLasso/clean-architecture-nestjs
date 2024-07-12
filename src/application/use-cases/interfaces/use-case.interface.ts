import { IResult } from '../../../result.interface';

export interface IUseCase<TRequest, TResponse> {
  execute(data: TRequest): IResult<TResponse>;
}
