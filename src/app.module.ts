// ----- modules -----
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
// ----- controllers -----
import { Cats2Controller } from './cats/cats2.controller';
// ----- services -----
import { DogService } from './dogs/dogs.service';
// -------- middleware --------
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// -------- other --------
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

const mockDogsService = {};

@Module({
  imports: [
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
    CatsModule,
    DogsModule,
  ],
  controllers: [Cats2Controller],
  providers: [
    {
      provide: DogService,
      useValue: mockDogsService,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
