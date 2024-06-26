import { Injectable } from '@nestjs/common';
import { IResult } from './result.interface';
import { Result } from './result.class';

@Injectable()
export class ValidationService {
  validate(num1: number, num2: number): IResult<boolean> {
    if (isNaN(num1) || isNaN(num2)) {
      return Result.fail<boolean>('Error en los parámetros');
    }
    return Result.success<boolean>(true);
  }
}
