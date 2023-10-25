import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { CustomExceptionFilter } from './common/filter/index';
import session from 'express-session';
// https://www.npmjs.com/package/helmet
import helmet from 'helmet';
import csurf from 'csurf';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局前缀
  app.setGlobalPrefix('api');

  // 使用全局守卫
  // app.useGlobalGuards();
  // 使用全局拦截器
  // app.useGlobalInterceptors();
  // 使用全局管道
  // app.useGlobalPipes(new ValidationPipe());  // 校验器
  // 异常过滤器
  // app.useGlobalFilters(new CustomExceptionFilter());
  // URI 版本管理
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // cors 跨域
  app.enableCors();

  // app.use(
  //   session({
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //   }),
  // );

  // 可以帮助保护您的应用免受一些众所周知的 Web 漏洞的影响
  // app.use(
  //   helmet({
  //     contentSecurityPolicy: false,
  //   }),
  // );

  // CSRF 保护
  // app.use(csurf());

  // Nest 使用同一个 MyLogger 实例
  // app.useLogger(app.get(MyLogger));

  // 文档
  const options = new DocumentBuilder()
    .setTitle('NestJS Realworld Example App')
    .setDescription('The Realworld API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
