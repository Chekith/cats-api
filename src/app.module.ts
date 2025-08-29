import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/cat.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'chekith',
      database: 'nestdemo',
      models: [Cat], 
      autoLoadModels: true,
      synchronize: true,
    }),
    CatsModule,
  ],
})
export class AppModule {}
