import { Module } from '@nestjs/common';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menu } from './models/menu.model';

@Module({
  controllers: [HeaderController],
  providers: [HeaderService],
  imports: [
    SequelizeModule.forFeature([Menu])
  ]
})
export class HeaderModule {}
