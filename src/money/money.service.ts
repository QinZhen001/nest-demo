import { Injectable } from '@nestjs/common';
import { CreateMoneyDto } from './dto/create-money.dto';
import { UpdateMoneyDto } from './dto/update-money.dto';

@Injectable()
export class MoneyService {
  create(createMoneyDto: CreateMoneyDto) {
    return 'This action adds a new money';
  }

  findAll() {
    return `This action returns all money`;
  }

  findOne(id: number) {
    return `This action returns a #${id} money`;
  }

  update(id: number, updateMoneyDto: UpdateMoneyDto) {
    return `This action updates a #${id} money`;
  }

  remove(id: number) {
    return `This action removes a #${id} money`;
  }
}
