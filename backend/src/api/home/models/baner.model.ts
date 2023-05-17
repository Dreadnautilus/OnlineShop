import { Column, Model, Table, DataType } from "sequelize-typescript";

interface BanerCreationAttrs {
    title: string,
    images: Array<string>
}

@Table({tableName: 'Baner'})
export class Baner extends Model<Baner, BanerCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING})
    title: string;

    @Column({type: DataType.ARRAY(DataType.STRING)})
    images: Array<string>;
}