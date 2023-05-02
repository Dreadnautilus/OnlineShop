import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Menu extends Model<Menu> {
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    title: string;
}