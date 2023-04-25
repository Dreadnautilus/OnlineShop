import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type CharacterisitcsPropDocument = HydratedDocument<CharacterisitcsProp>;

@Schema()
export class CharacterisitcsProp {
    @Prop()
    title: string;

    @Prop()
    value: string;
}

export const CharacterisitcsPropSchema = SchemaFactory.createForClass(CharacterisitcsProp);