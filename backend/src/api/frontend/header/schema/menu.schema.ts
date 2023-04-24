import { HydratedDocument, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Submenu } from './submenu.schema';
import * as mongoose from 'mongoose';

export type MenuDocument = HydratedDocument<Menu>

@Schema()
export class Menu {
    _id: ObjectId;

    @Prop({ required: true})
    title: string;

    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: Submenu.name}]})
    menu: Submenu[];
}

export const MenuSchema = SchemaFactory.createForClass(Menu);