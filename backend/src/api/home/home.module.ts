import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Baner } from './models/baner.model';

@Module({
  providers: [HomeService],
  controllers: [HomeController],
  imports: [
    SequelizeModule.forFeature([Baner])
  ]
})
export class HomeModule {}
