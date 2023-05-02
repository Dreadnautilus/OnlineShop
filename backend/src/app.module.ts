import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule} from '@nestjs/config';
import { HeaderModule } from './api/header/header.module';
import { Menu } from './api/header/models/menu.model';


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
      models: [Menu],
      autoLoadModels: true
    }),
    HeaderModule
],
  providers: [],
})
export class AppModule {}
