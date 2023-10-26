import Joi from 'joi';
import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsInt()
  readonly age: number;

  @ApiProperty()
  @IsString()
  readonly breed: string;
}

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});
