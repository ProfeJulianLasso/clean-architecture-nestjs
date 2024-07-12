import { HttpException, HttpStatus } from '@nestjs/common';
import { Errors } from '../../errors.enum';
import { IResult } from '../../result.interface';

export abstract class BaseController {
  protected HandleError<TResponse>(result: IResult<TResponse>): void {
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
  }
}
