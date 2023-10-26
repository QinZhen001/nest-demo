import {
  Controller,
  Post,
  Body,
  Get,
  Res,
  Sse,
  MessageEvent,
} from '@nestjs/common';
import { Response } from 'express';
import { MyHttpService } from './http.service';
import { AxiosResponse } from 'axios';
import { Observable, interval, map } from 'rxjs';
import { readFileSync } from 'fs';
import { join } from 'path';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('http')
@Controller('http')
export class HttpController {
  constructor(private myHttpService: MyHttpService) {}

  @Get('cats')
  getFile(): Observable<AxiosResponse<any[]>> {
    return this.myHttpService.getFile();
  }

  @Get('test')
  getTest() {
    return this.myHttpService.test();
  }

  @Get('test-see')
  index(@Res() response: Response) {
    const p = join(__dirname, 'index.html');

    console.log(p);

    // response.type('text/html').send(readFileSync(p).toString());
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
