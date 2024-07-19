import { Module } from '@nestjs/common';
import { ISumRepository } from '../../application/repositories/sum.repository';
import { SumRepository } from './repositories/sum.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SumEntity } from './entities/sum.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user_db_postgres',
      password: 'my_secret_password_postgres',
      database: 'test_sum_db',
      entities: [SumEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([SumEntity]),
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
export class SQLModule {}
