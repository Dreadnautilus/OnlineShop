import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService);
  const port = config.get<number>('BACKEND_PORT')
  await app.listen(port || 4001, () => {
    console.log(`App started on port: ${port}`)
  });
}
bootstrap();
