import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ItemDocument = HydratedDocument<Item>

@Schema()
export class Item {
    @Prop()
    title: string;

    @Prop()
    size: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);