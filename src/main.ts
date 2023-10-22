import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { CustomExceptionFilter } from './common/filter/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 使用全局守卫
  // app.useGlobalGuards();
  // 使用全局拦截器
  // app.useGlobalInterceptors();
  // 使用全局管道
  // app.useGlobalPipes(new ValidationPipe());  // 校验器
  // 异常过滤器
  app.useGlobalFilters(new CustomExceptionFilter());
  // URI 版本管理
  app.enableVersioning({
    type: VersioningType.URI,
  });

  // Nest 使用同一个 MyLogger 实例
  // app.useLogger(app.get(MyLogger));

  await app.listen(3000);
}
bootstrap();
