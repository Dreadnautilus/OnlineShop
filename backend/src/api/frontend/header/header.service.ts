import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Menu, MenuDocument } from './schema/menu.schema';

@Injectable()
export class HeaderService {
    constructor(
        @InjectConnection('frontend') private connection: Connection,
        @InjectModel(Menu.name, 'frontend') private menuModel: Model<MenuDocument>,
    ) {}
    async findAll(): Promise<Menu[]> {
    return await this.menuModel.find().populate({
        path: 'menu',
        populate: {
            path: 'list'
        }
    })
    }
}