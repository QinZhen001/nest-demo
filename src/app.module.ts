// ----- modules -----
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { CustomTtlModule } from './custom-ttl/custom-ttl.module';
// ----- controllers -----
import { Cats2Controller } from './cats/cats2.controller';
// ----- services -----
import { DogsService } from './dogs/services/dogs.service';
// -------- middleware --------
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// -------- other --------
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { VersioningType, VersioningOptions } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { CacheConfig } from './common/config/cache.config';

const mockDogsService = {};

@Module({
  imports: [
    CacheModule.register({
      // 注意一定要全局 不然其他模块无法使用
      isGlobal: true,
      useClass: CacheConfig,
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [],
    //   synchronize: true,
    // }),
    CustomTtlModule,
    CatsModule,
    DogsModule,
  ],
  // 直接使用 controller 的方式
  controllers: [Cats2Controller],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: VersioningOptions,
    // },
    // {
    //   provide: APP_FILTER,
    //   useClass: GlobalExceptionsFilter,
    // },
    // test: useValue
    // {
    //   provide: DogsService,
    //   useValue: mockDogsService,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
