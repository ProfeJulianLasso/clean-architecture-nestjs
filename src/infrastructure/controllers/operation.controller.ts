import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { IApplication } from '../../application/application.interface';
import { SumDto } from '../../application/dto/sum.dto';
import { Errors } from '../../errors.enum';

@Controller()
export class OperationController {
  constructor(private readonly application: IApplication) {}

  @Get()
  sum(@Query('num1') num1: number, @Query('num2') num2: number): number {
    num1 = Number(num1);
    num2 = Number(num2);

    const sumDto = new SumDto(num1, num2);
    const result = this.application.sumOperation(sumDto, 'token');

    if (result.isFailure) {
      switch (result.code) {
        case Errors.INVALID_TOKEN:
          throw new HttpException(result.error, HttpStatus.UNAUTHORIZED);
        case Errors.INVALID_NUMBER:
          throw new HttpException(result.error, HttpStatus.BAD_REQUEST);
        default:
          throw new HttpException(
            result.error,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      }
    }

    return result.value;
  }
}
