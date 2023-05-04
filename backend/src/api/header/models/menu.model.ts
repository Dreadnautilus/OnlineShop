import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { SubMenu } from "./submenu.model";

interface MenuCreationAttrs {
    title: string;
}

@Table({tableName: 'Menu'})
export class Menu extends Model<Menu, MenuCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING})
    title: string;

    @HasMany(() => SubMenu)
    SubMenu: SubMenu[]
}