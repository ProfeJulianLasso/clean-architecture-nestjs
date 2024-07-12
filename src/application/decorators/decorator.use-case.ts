import { IResult } from '../../result.interface';
import { IUseCase } from '../use-cases/interfaces/use-case.interface';

export abstract class DecoratorUseCase<TRequest, TResponse>
  implements IUseCase<TRequest, TResponse>
{
  constructor(private readonly useCase: IUseCase<TRequest, TResponse>) {}

  execute(data: TRequest): IResult<TResponse> {
    return this.useCase.execute(data);
  }
}
