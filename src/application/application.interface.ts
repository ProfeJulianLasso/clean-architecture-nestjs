import { IResult } from '../result.interface';
import { SumDto } from './dto/sum.dto';

export abstract class IApplication {
  abstract sumOperation(data: SumDto, token: string): IResult<number>;
}
