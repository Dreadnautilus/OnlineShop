import { Module } from '@nestjs/common';
import { BanerController } from './baner.controller';
import { BanerService } from './baner.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Baner, BanerSchema } from './schema/baner.schema';

@Module({
  controllers: [BanerController],
  providers: [BanerService],
  imports: [
    MongooseModule.forFeature([{ name: Baner.name, schema: BanerSchema}], 'frontend')
  ],
})
export class BanerModule {}
