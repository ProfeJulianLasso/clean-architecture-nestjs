import { IAggregate } from '../domain/aggregates/aggregate.interface';
import { Errors } from '../errors.enum';
import { Result } from '../result.class';
import { IResult } from '../result.interface';
import { IApplication } from './application.interface';
import { SumDto } from './dto/sum.dto';
import { ISumRepository } from './repositories/sum.repository';
import { AddUseCase } from './use-cases/add.use-case';

export class Application implements IApplication {
  private readonly domain: IAggregate;
  private readonly repository: ISumRepository;

  constructor(aggregate: IAggregate, repository: ISumRepository) {
    this.domain = aggregate;
    this.repository = repository;
  }

  sumOperation(data: SumDto, token: string): IResult<number> {
    // Check if the token is valid
    console.log(`Token: ${token}`);
    // ---------------------------
    if (token !== 'token') {
      return Result.fail('Invalid token', Errors.INVALID_TOKEN);
    }

    const useCase = new AddUseCase(this.domain, this.repository);
    return useCase.execute(data);
  }
}
