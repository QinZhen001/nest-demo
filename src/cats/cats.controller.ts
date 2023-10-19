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
} from '@nestjs/common';
import { CreateCatDto, createCatSchema } from './dto/index';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/index';
import { JoiValidationPipe } from '../common/pipe/validation.pipe';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return `This action returns a #${id} cat`;
  }

  // @Get()
  // findAll(request: Request): string {
  //   console.log(request);
  //   return 'This action returns all cats';
  // }
  // @Get()
  // async findAll(): Promise<any[]> {
  //   return [];
  // }
  // @Post()
  // create(@Body() createCatDto: CreateCatDto): string {
  //   console.log(createCatDto);
  //   return 'This action adds a new cat';
  // }
  // @Post(':id')
  // create204(@Param() params): string {
  //   console.log(params.id);
  //   return 'This action adds a new cat 204';
  // }
  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // redirect() {}
}
