import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database.service';
import { ValidationService } from './validation.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DatabaseService, ValidationService],
})
export class AppModule {}
