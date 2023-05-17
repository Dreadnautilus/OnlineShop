import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { SubMenu } from "./submenu.model";


interface SubMenuListCreationAttrs {
    title: string;
    url: string;
    SubMenuId: number;
}

@Table({tableName: 'SubMenuList'})
export class SubMenuList extends Model<SubMenuList, SubMenuListCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({type: DataType.STRING})
    title: string;

    @Column({type: DataType.STRING})
    url: string;

    @ForeignKey(() => SubMenu)
    @Column({type: DataType.INTEGER})
    SubMenuId: number
}