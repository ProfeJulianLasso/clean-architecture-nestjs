import { Module } from '@nestjs/common';
import { Application } from '../application/application.class';
import { IApplication } from '../application/application.interface';
import { ISumRepository } from '../application/repositories/sum.repository';
import { Aggregate } from '../domain/aggregates/aggregate.class';
import { IAggregate } from '../domain/aggregates/aggregate.interface';
import { OperationController } from './controllers/operation.controller';
import { NoSqlModule } from './no-sql/no-sql.module';

@Module({
  imports: [NoSqlModule],
  controllers: [OperationController],
  providers: [
    {
      provide: IAggregate,
      useClass: Aggregate,
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
