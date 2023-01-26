import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CONSULT = sequelize.define(
  "consult",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default CONSULT;
