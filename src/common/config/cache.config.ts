import { Injectable } from '@nestjs/common';
import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager';

@Injectable()
export class CacheConfig implements CacheOptionsFactory {
  createCacheOptions(): CacheModuleOptions {
    const ttl = 100;

    return { ttl };
  }
}
