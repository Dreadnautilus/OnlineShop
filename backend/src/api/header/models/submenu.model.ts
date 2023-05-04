import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Menu } from "./menu.model";
import { SubMenuList } from "./submenulist.model";

interface SubMenuCreationAttrs {
    title: string;
    MenuId: number;
}

@Table({tableName: 'SubMenu'})
export class SubMenu extends Model<SubMenu, SubMenuCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    title: string;

    @ForeignKey(() => Menu)
    @Column({type: DataType.INTEGER})
    MenuId: number;

    @HasMany(() => SubMenuList)
    SubMenuList: SubMenuList[]
}