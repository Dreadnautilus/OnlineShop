import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Menu, MenuDocument } from '../header/schema/menu.schema';
import { Subscribes } from './schemas/subscribes.schema';
import { SubscribesModule } from './subscribes.module';
import { CreateSubscribeDto } from './dto/CreateSubscribes.dto'


@Injectable()
export class SubscribesService {
    constructor(
        @InjectConnection('frontend') private connection: Connection,
        @InjectModel(Menu.name, 'frontend') private menuModel: Model<MenuDocument>,
        @InjectModel(Subscribes.name, 'users') private subscribesModel: Model<SubscribesModule>,
    ) {}
    async getMenuList(): Promise<Menu[]> {
        return await this.menuModel.find()
    }

    async addSubscribe(CreateSubscribeDto:CreateSubscribeDto): Promise<any> {
        const subscribe = await this.subscribesModel.findOne({email: CreateSubscribeDto.email})
        if(subscribe) {
            await subscribe.updateOne(CreateSubscribeDto)
            return await subscribe
        } else {
            const createdSubscribe = new this.subscribesModel(CreateSubscribeDto);
            return createdSubscribe.save()
        }
    }
}
