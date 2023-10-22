import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('ttl')
@CacheTTL(600)
export class CustomTtlController {
  counter = 0;
  constructor() {}

  @Get()
  @CacheTTL(500)
  @UseInterceptors(CacheInterceptor)
  getNumber() {
    return this.counter++;
  }

  @Get('/controller')
  @UseInterceptors(CacheInterceptor)
  getNumberWithControllerTTL() {
    return this.counter++;
  }
}
