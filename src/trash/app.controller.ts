import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';
import { ValidationService } from './validation.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DatabaseService,
    private readonly validationService: ValidationService,
  ) {}

  @Get()
  sum(@Query('num1') num1: number, @Query('num2') num2: number): number {
    num1 = Number(num1);
    num2 = Number(num2);

    const validation = this.validationService.validate(num1, num2);
    if (validation.isFailure) {
      throw new HttpException(validation.error, HttpStatus.BAD_REQUEST);
    }

    const result = this.appService.sum(num1, num2);
    if (result.isFailure) {
      throw new HttpException(result.error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    this.dbService.saveData(num1, num2, result.value);
    return result.value;
  }
}
