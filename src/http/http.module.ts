import { Module } from '@nestjs/common';
import { HttpController } from './http.controller';
import { HttpModule } from '@nestjs/axios';
import { MyHttpService } from './http.service';

@Module({
  imports: [HttpModule],
  controllers: [HttpController],
  providers: [MyHttpService],
})
export class MyHttpModule {}
