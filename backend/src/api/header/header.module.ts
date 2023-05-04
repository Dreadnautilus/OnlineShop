import { Module } from '@nestjs/common';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Menu } from './models/menu.model';
import { SubMenu } from './models/submenu.model';
import { SubMenuList } from './models/submenulist.model';

@Module({
  controllers: [HeaderController],
  providers: [HeaderService],
  imports: [
    SequelizeModule.forFeature([Menu, SubMenu, SubMenuList])
  ]
})
export class HeaderModule {}
