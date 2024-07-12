import { Errors } from '../../errors.enum';
import { Result } from '../../result.class';
import { IResult } from '../../result.interface';
import { IUseCase } from '../use-cases/interfaces/use-case.interface';
import { DecoratorUseCase } from './decorator.use-case';

export class AdministratorDecorator<
  TRequest,
  TResponse,
> extends DecoratorUseCase<TRequest, TResponse> {
  constructor(
    useCase: IUseCase<TRequest, TResponse>,
    private readonly token: string,
  ) {
    super(useCase);
  }

  execute(data: TRequest): IResult<TResponse> {
    if (this.token !== 'token') {
      return Result.fail<TResponse>('Unauthorized', Errors.INVALID_TOKEN);
    }
    return super.execute(data);
  }
}
