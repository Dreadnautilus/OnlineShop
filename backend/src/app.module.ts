import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule} from '@nestjs/config';
import { HeaderModule } from './api/header/header.module';
import { Menu } from './api/header/models/menu.model';
import { SubMenu } from './api/header/models/submenu.model';
import { SubMenuList } from './api/header/models/submenulist.model';


@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '../../.env', isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [Menu, SubMenu, SubMenuList],
      autoLoadModels: true
    }),
    HeaderModule
],
  providers: [],
})
export class AppModule {}
