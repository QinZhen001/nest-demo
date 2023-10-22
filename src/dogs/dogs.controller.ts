// https://nest.nodejs.cn/controllers
import {
  Controller,
  Get,
  Post,
  HttpCode,
  Redirect,
  Param,
  Body,
  ParseIntPipe,
  HttpStatus,
  UsePipes,
  SetMetadata,
  UseInterceptors,
  Inject,
} from '@nestjs/common';
import { FindOneParams } from './params';
import { DogsService } from './services/dogs.service';
import { TasksService } from './services/tasks.service';
import { Cache } from 'cache-manager';
import { Version } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Controller('dogs')
export class DogsController {
  constructor(
    private readonly dogsService: DogsService,
    private readonly tasksService: TasksService,
  ) {}

  @Get()
  async findAll(): Promise<any> {
    console.log('process.env', process.env);
    console.log('process.env DATABASE_USER', process.env.DATABASE_USER);
    console.log('process.env DATABASE_PASSWORD', process.env.DATABASE_PASSWORD);

    this.tasksService.handleCron();

    return 'dogs';
  }

  @Get(':id')
  @Version('1')
  findOneV1(@Param() params: FindOneParams) {
    return '11111';
  }

  @Get(':id')
  @Version('2')
  async findOneV2(@Param() params: FindOneParams) {
    return this.dogsService.getData('xxx');

    // const cacheData = await this.cacheManager.get('xxx');
    // console.log('cacheData', cacheData);
    // if (cacheData) {
    //   return 'we has cacheData!' + cacheData;
    // }
    // const data = 'data';
    // await this.cacheManager.set('xxx', data, 6000); // 缓存数据
    // return data;
  }
}
