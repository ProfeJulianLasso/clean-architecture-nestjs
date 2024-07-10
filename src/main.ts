import { NestFactory } from '@nestjs/core';
// import { AppModule } from './trash/app.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(InfrastructureModule);
  await app.listen(3000);
}
bootstrap();
