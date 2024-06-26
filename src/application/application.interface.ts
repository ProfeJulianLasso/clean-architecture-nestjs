import { IResult } from '../result.interface';
import { SumDto } from './dto/sum.dto';

export interface IApplication {
  sumOperation(data: SumDto, token: string): IResult<number>;
}
