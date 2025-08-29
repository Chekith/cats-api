import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { PrimaryKey, AutoIncrement } from 'sequelize-typescript';

interface CatAttributes {
  id: number;
  name: string;
  age: number;
  breed: string;
}

type CatCreationAttributes = Optional<CatAttributes, 'id'>;

@Table
export class Cat extends Model<CatAttributes, CatCreationAttributes> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare breed: string;
}
