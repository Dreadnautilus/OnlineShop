import { Module } from '@nestjs/common';
import { SubscribesController } from './subscribes.controller';
import { SubscribesService } from './subscribes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from '../header/schema/menu.schema';
import { Subscribes, SubscribesSchema } from './schemas/subscribes.schema';

@Module({
  controllers: [SubscribesController],
  providers: [SubscribesService],
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema}], 'frontend'),
    MongooseModule.forFeature([{ name: Subscribes.name, schema: SubscribesSchema}], 'users'),
  ]
})
export class SubscribesModule {}
