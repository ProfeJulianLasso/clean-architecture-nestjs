import { Injectable } from '@nestjs/common';
import { Result } from '../result.class';
import { IResult } from '../result.interface';

@Injectable()
export class AppService {
  sum(num1: number, num2: number): IResult<number> {
    const answer = num1 + num2;
    return Result.success<number>(answer);
  }
}
