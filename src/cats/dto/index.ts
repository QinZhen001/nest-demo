import Joi from 'joi';

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export const createCatSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
  breed: Joi.string(),
});
