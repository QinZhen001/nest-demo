// https://nest.nodejs.cn/controllers
import {
  Controller,
  Get,
  Post,
  HttpCode,
  Redirect,
  Param,
  Body,
  Res,
  HttpStatus,
  Logger,
  Scope,
} from '@nestjs/common';
import { CreateCatDto } from './dto/index';
import { Response } from 'express';

@Controller('cats2')
export class Cats2Controller {
  private readonly logger = new Logger(Cats2Controller.name);

  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
    this.logger.log('findAll');
    res.status(HttpStatus.OK).json([]);
  }
}
