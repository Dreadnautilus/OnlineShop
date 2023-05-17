import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Baner } from './models/baner.model';
import { Menu } from '../header/models/menu.model';
import { Subscription } from './models/subscription.model';
import { CreateSubscriptionDto } from './dto/CreateSubscription.dto';

@Injectable()
export class HomeService {
    constructor(
        @InjectModel(Baner) private banerRepository: typeof Baner,
        @InjectModel(Menu) private menuRepository: typeof Menu,
        @InjectModel(Subscription) private subscriptionRepository: typeof Subscription    
    ) {}

    async getAllBaners(): Promise<Baner[]> {
        return await this.banerRepository.findAll()
    }

    async getMenuList(): Promise<Menu[]> {
        return await this.menuRepository.findAll()
    }

    async subscribe(dto: CreateSubscriptionDto): Promise<any> {
        const isSubscribe = await this.subscriptionRepository.findOne({where: {email: dto.email}})
        if(isSubscribe) {
            await isSubscribe.update(dto)
            return isSubscribe
        } else {
            const subscribed = await this.subscriptionRepository.create(dto)
            return subscribed
        }
    }
}
