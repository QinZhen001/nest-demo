import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用全局守卫
  // app.useGlobalGuards();
  // 使用全局拦截器
  // app.useGlobalInterceptors();
  // 使用全局管道
  // app.useGlobalPipes(new ValidationPipe());  // 校验器
  await app.listen(3000);
}
bootstrap();
