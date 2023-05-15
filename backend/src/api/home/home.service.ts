import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Baner } from './models/baner.model';

@Injectable()
export class HomeService {
    constructor(@InjectModel(Baner) private banerRepositoru: typeof Baner) {}

    async getAllBaners() {
        return await this.banerRepositoru.findAll()
    }
}
