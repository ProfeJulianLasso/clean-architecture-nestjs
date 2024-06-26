import { IAggregate } from '../../domain/aggregates/aggregate.interface';
import { IResult } from '../../result.interface';
import { SumDto } from '../dto/sum.dto';
import { ISumRepository } from '../repositories/sum.repository';

export class AddUseCase {
  private readonly domain: IAggregate;
  private readonly repository: ISumRepository;

  constructor(aggregate: IAggregate, repository: ISumRepository) {
    this.domain = aggregate;
    this.repository = repository;
  }

  execute(data: SumDto): IResult<number> {
    const result = this.domain.sumOperation(data.number1, data.number2);

    if (result.isFailure) {
      return result;
    }

    this.repository.addOperationSum(data.number1, data.number2, result.value);
    return result;
  }
}
