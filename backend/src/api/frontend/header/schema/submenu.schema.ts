import { HydratedDocument, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { SubmenuList } from './SubmenuList.schema';
import * as mongoose from 'mongoose';

export type SubmenuDocument = HydratedDocument<Submenu>

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
})
export class Submenu {
    @Prop()
    title: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: SubmenuList.name}]})
    list: SubmenuList[];
}

export const SubmenuSchema = SchemaFactory.createForClass(Submenu);


