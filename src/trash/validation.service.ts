import { Injectable } from '@nestjs/common';
import { Result } from '../result.class';
import { IResult } from '../result.interface';

@Injectable()
export class ValidationService {
  validate(num1: number, num2: number): IResult<boolean> {
    if (isNaN(num1) || isNaN(num2)) {
      return Result.fail<boolean>('Error en los parámetros', 'BAD_REQUEST');
    }
    return Result.success<boolean>(true);
  }
}
