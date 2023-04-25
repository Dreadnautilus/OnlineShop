import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogItem, CatalogItemSchema } from './schemas/catalog.item.schema';
import { Characteristic, CharacteristicSchema } from './schemas/characteristics.schema';
import { CharacterisitcsProp, CharacterisitcsPropSchema } from './schemas/characteristics.props.schema';

@Module({
  controllers: [CatalogController],
  providers: [CatalogService],
  imports: [
    MongooseModule.forFeature([{ name: CatalogItem.name, schema: CatalogItemSchema}], 'catalog'),
    MongooseModule.forFeature([{ name: Characteristic.name, schema: CharacteristicSchema}], 'catalog'),
    MongooseModule.forFeature([{ name: CharacterisitcsProp.name, schema: CharacterisitcsPropSchema}], 'catalog')
  ]
})
export class CatalogModule {}
