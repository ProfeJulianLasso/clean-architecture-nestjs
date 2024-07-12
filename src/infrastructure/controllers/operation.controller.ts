import { Controller, Get, Query } from '@nestjs/common';
import { IApplication } from '../../application/application.interface';
import { SumDto } from '../../application/dto/sum.dto';
import { BaseController } from './base.controller';

@Controller()
export class OperationController extends BaseController {
  constructor(private readonly application: IApplication) {
    super();
  }

  @Get()
  sum(@Query('num1') num1: number, @Query('num2') num2: number): number {
    num1 = Number(num1);
    num2 = Number(num2);

    const sumDto = new SumDto(num1, num2);
    const result = this.application.sumOperation(sumDto, 'token');

    this.HandleError(result);

    return result.value;
  }
}
