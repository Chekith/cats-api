import { IsOptional, IsInt, Min } from 'class-validator';

export class ListAllEntities {
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly limit?: number;
}
