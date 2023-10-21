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

@Controller('dogs')
export class DogsController {
  // constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<any> {
    console.log('process.env', process.env);
    console.log('process.env DATABASE_USER', process.env.DATABASE_USER);
    console.log('process.env DATABASE_PASSWORD', process.env.DATABASE_PASSWORD);
    return 'dogs';
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return 'This action returns a user';
  }
}
