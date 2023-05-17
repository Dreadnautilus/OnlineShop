import { Table, Model, Column, DataType } from "sequelize-typescript";

interface subscriptionCreationAttrs{
    email: string
}

@Table({tableName: 'Subscription'})
export class Subscription extends Model<Subscription, subscriptionCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    email: string;

    @Column({type: DataType.BOOLEAN})
    isMen: boolean;

    @Column({type: DataType.BOOLEAN})
    isWomen: boolean;

    @Column({type: DataType.BOOLEAN})
    isKids: boolean;
}