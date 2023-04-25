import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as mongoose from 'mongoose';
import { CharacterisitcsProp } from "./characteristics.props.schema";


export type CharacteristicDocument = HydratedDocument<Characteristic>

@Schema()
export class Characteristic {
    @Prop()
    title: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: CharacterisitcsProp.name }]})
    Props: CharacterisitcsProp[];
}

export const CharacteristicSchema = SchemaFactory.createForClass(Characteristic);