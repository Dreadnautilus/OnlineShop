import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import * as mongoose from 'mongoose'
import { CharacterisitcsProp } from "./characteristics.props.schema";


export type CatalogItemDocument = HydratedDocument<CatalogItem>;

@Schema()
export class CatalogItem {
    @Prop()
    title: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: CharacterisitcsProp.name}]})
    characteristics: CharacterisitcsProp[];
}

export const CatalogItemSchema = SchemaFactory.createForClass(CatalogItem);