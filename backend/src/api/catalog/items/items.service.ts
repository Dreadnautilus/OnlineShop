import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Item, ItemDocument } from './schema/item.schema';

@Injectable()
export class ItemsService {
    constructor(
        @InjectConnection('items') private connection: Connection,
        @InjectModel(Item.name, 'items') private itemsModel: Model<ItemDocument>
    ) {}
    async findAll(): Promise<Item[]> {
        return await this.itemsModel.find()
    }
}
