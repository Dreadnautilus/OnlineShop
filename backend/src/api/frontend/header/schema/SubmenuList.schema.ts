import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument} from "mongoose";


export type SubmenuListDocument = HydratedDocument<SubmenuList>

@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
})
export class SubmenuList {
    @Prop()
    title: string;

    @Prop()
    url: string;
}

export const SubmenuListSchema = SchemaFactory.createForClass(SubmenuList)