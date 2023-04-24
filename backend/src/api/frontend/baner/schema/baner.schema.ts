import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type BanerDocument = HydratedDocument<Baner>

@Schema()
export class Baner {
    @Prop()
    title: string;

    @Prop()
    links: Array<string>
}

export const BanerSchema = SchemaFactory.createForClass(Baner);