import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sum, SumSchema } from './schemas/sum.schema';
import { ISumRepository } from '../../application/repositories/sum.repository';
import { SumRepository } from './repositories/sum.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/sum'),
    MongooseModule.forFeature([
      {
        name: Sum.name,
        schema: SumSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: ISumRepository,
      useClass: SumRepository,
    },
  ],
  exports: [
    {
      provide: ISumRepository,
      useClass: SumRepository,
    },
  ],
})
export class NoSqlModule {}
