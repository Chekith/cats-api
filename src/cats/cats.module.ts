import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cat.model';

@Module({
  imports: [SequelizeModule.forFeature([Cat])],  
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
