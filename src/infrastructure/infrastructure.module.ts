import { Module } from '@nestjs/common';
import { OperationController } from './controllers/operation.controller';
import { Application } from '../application/application.class';
import { IApplication } from '../application/application.interface';
import { IAggregate } from '../domain/aggregates/aggregate.interface';
import { Aggregate } from '../domain/aggregates/aggregate.class';
import { ISumRepository } from '../application/repositories/sum.repository';
import { SumRepository } from './persistence/repositories/sum.repository';

@Module({
  imports: [],
  controllers: [OperationController],
  providers: [
    {
      provide: IAggregate,
      useClass: Aggregate,
    },
    {
      provide: ISumRepository,
      useClass: SumRepository,
    },
    {
      provide: IApplication,
      useFactory: (aggregate: IAggregate, repository: ISumRepository) => {
        return new Application(aggregate, repository);
      },
      inject: [IAggregate, ISumRepository],
    },
  ],
})
export class InfrastructureModule {}
