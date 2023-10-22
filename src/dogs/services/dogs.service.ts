import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

interface Dog {
  name: string;
}

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }

  async getData(key: string): Promise<any> {
    const cacheData = await this.cacheManager.get(key);
    if (cacheData) {
      return 'we has cacheData!' + cacheData;
    }
    const data = await this.fetchDataFromDatabase();
    // 注意这里第三个参数是 ms
    // 这里踩了坑，时间太短了，导致一直没有缓存成功！！！
    await this.cacheManager.set(key, data, 6000); // 缓存数据
    return data;
  }

  async fetchDataFromDatabase(): Promise<any> {
    // 从数据库中获取数据
    const data = 'data';
    return data;
  }
}
