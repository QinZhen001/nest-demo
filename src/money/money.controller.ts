import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoneyService } from './money.service';
import { CreateMoneyDto } from './dto/create-money.dto';
import { UpdateMoneyDto } from './dto/update-money.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('money')
@Controller('money')
export class MoneyController {
  constructor(private readonly moneyService: MoneyService) {}

  @Post()
  create(@Body() createMoneyDto: CreateMoneyDto) {
    return this.moneyService.create(createMoneyDto);
  }

  @Get()
  findAll() {
    return this.moneyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moneyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoneyDto: UpdateMoneyDto) {
    return this.moneyService.update(+id, updateMoneyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moneyService.remove(+id);
  }
}
