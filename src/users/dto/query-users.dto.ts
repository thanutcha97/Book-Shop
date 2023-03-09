import { ApiPropertyOptional } from '@nestjs/swagger'
import dayjs from 'dayjs'
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator'

export class QueryUsersDTO {
  @ApiPropertyOptional({
    type: Number,
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  page?: number

  @ApiPropertyOptional({
    type: Number,
    example: 10,
  })
  @IsOptional()
  @IsNumber()
  perPage?: number

  @ApiPropertyOptional({
    type: String,
  })
  @IsOptional()
  @IsString()
  username?: string

  @ApiPropertyOptional({
    type: String,
  })
  @IsOptional()
  @IsString()
  firstname?: string

  @ApiPropertyOptional({
    type: String,
  })
  @IsOptional()
  @IsString()
  lastname?: string

  @ApiPropertyOptional({
    type: Date,
    example: dayjs().startOf('days').toISOString(),
  })
  @IsDateString()
  @IsOptional()
  startDate?: string

  @ApiPropertyOptional({
    type: Date,
    example: dayjs().endOf('days').toISOString(),
  })
  @IsDateString()
  @IsOptional()
  endDate?: string

  @ApiPropertyOptional({
    type: String,
  })
  @IsOptional()
  @IsString()
  sort?: string
}
