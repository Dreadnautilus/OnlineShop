import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Baner, BanerDocument } from './schema/baner.schema';
import { Model, Connection } from 'mongoose';

@Injectable()
export class BanerService {
    constructor(
        @InjectConnection('frontend') private connection: Connection,
        @InjectModel(Baner.name, 'frontend') private banerModel: Model<BanerDocument>
    ) {}
    async findAll(): Promise<Baner[]> {
        return await this.banerModel.find()
    };
}
