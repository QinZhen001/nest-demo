import { Injectable } from '@nestjs/common';

interface Dog {
  name: string;
}

@Injectable()
export class DogService {
  private readonly dogs: Dog[] = [];

  create(dog: Dog) {
    this.dogs.push(dog);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}
