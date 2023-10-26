import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
