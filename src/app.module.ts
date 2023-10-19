import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

import { CatsModule } from './cats/cats.module';
// ----- controllers -----
import { Cats2Controller } from './cats/cats2.controller';
// ----- services -----

@Module({
  imports: [CatsModule],
  controllers: [Cats2Controller],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
