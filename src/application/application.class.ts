import { IAggregate } from '../domain/aggregates/aggregate.interface';
import { IResult } from '../result.interface';
import { IApplication } from './application.interface';
import { AdministratorDecorator } from './decorators/administrator.decorator';
import { SumDto } from './dto/sum.dto';
import { ISumRepository } from './repositories/sum.repository';
import { AddUseCase } from './use-cases/add.use-case';

export class Application implements IApplication {
  constructor(
    private readonly domain: IAggregate,
    private readonly repository: ISumRepository,
  ) {}

  sumOperation(data: SumDto, token: string): IResult<number> {
    const useCase = new AdministratorDecorator<SumDto, number>(
      new AddUseCase(this.domain, this.repository),
      token,
    );
    return useCase.execute(data);
  }
}
