import { Model } from 'mongoose';
import { ISumRepository } from '../../../application/repositories/sum.repository';
import { Sum } from '../schemas/sum.schema';
import { InjectModel } from '@nestjs/mongoose';

export class SumRepository extends ISumRepository {
  constructor(@InjectModel(Sum.name) private model: Model<Sum>) {
    super();
  }

  async addOperationSum(
    number1: number,
    number2: number,
    result: number,
  ): Promise<void> {
    const operation = await this.model.create({
      num1: number1,
      num2: number2,
      result,
    });
    operation.save();
  }
}
