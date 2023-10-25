import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

// test reflect-metadata
@Reflect.metadata('inClass', 'A')
class Test {
  @Reflect.metadata('inMethod', 'B')
  public hello(): string {
    return 'hello world';
  }
}

@Injectable()
export class MyHttpService {
  constructor(private readonly httpService: HttpService) {}

  getFile() {
    return this.httpService.get('http://localhost:3000/cats');
  }

  test() {
    console.log(Reflect.getMetadata('inClass', Test)); // 'A'
    console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B
  }
}
