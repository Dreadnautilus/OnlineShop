import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { CatalogItem, CatalogItemDocument } from './schemas/catalog.item.schema';

@Injectable()
export class CatalogService {
    constructor(
        @InjectConnection('catalog') private connection: Connection,
        @InjectModel(CatalogItem.name, 'catalog') private catalogModel: Model<CatalogItemDocument>,
    ) {}
    async findItem(param): Promise<CatalogItem[]> {
        return await this.catalogModel.findById(param).populate({
            path: 'characteristics'
        })
    }
}
