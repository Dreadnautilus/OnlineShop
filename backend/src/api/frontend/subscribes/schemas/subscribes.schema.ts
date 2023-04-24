import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SubscribesDocument = HydratedDocument<Subscribes>

@Schema()
export class Subscribes {
    @Prop({ required: true, unique: true})
    email: string;

    @Prop()
    isMen: boolean;

    @Prop()
    isWomen: boolean;

    @Prop()
    isKids: boolean;
}

export const SubscribesSchema = SchemaFactory.createForClass(Subscribes);