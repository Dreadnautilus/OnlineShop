import { Module } from '@nestjs/common';
import { HeaderService } from './header.service';
import { HeaderController } from './header.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { Menu, MenuSchema } from './schema/menu.schema';
import { Submenu, SubmenuSchema } from './schema/submenu.schema';
import { SubmenuList, SubmenuListSchema } from './schema/SubmenuList.schema';

@Module({
  providers: [HeaderService],
  controllers: [HeaderController],
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema}], 'frontend'),
    MongooseModule.forFeature([{ name: Submenu.name, schema: SubmenuSchema}], 'frontend'),
    MongooseModule.forFeature([{ name: SubmenuList.name, schema: SubmenuListSchema}], 'frontend')
  ],
})
export class HeaderModule {}
