import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Baner } from './models/baner.model';
import { Menu } from '../header/models/menu.model';
import { Subscription } from './models/subscription.model';

@Module({
  providers: [HomeService],
  controllers: [HomeController],
  imports: [
    SequelizeModule.forFeature([Baner, Menu, Subscription])
  ]
})
export class HomeModule {}
