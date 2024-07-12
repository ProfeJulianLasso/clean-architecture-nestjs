import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ISumRepository } from '../../../application/repositories/sum.repository';
import { SumEntity } from '../entities/sum.entity';

export class SumRepository extends ISumRepository {
  constructor(
    @InjectRepository(SumEntity)
    private repository: Repository<SumEntity>,
  ) {
    super();
  }

  async addOperationSum(
    number1: number,
    number2: number,
    result: number,
  ): Promise<void> {
    const operation = new SumEntity();
    operation.number1 = number1;
    operation.number2 = number2;
    operation.result = result;
    await this.repository.save(operation);
  }
}
