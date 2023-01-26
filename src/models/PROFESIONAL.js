import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PROFESIONAL = sequelize.define(
  "profesional",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DNI: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    avatar: {
      type: DataTypes.STRING(300),
    },
    description: {
      type: DataTypes.STRING(500),
    },
    abilities: {
      type: DataTypes.STRING(400), // hacer otra tabla
    },
    linkedin: {
      type: DataTypes.STRING(200),
    },
    password: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    timestamps: false,
  }
);

PROFESIONAL.hasMany(REVIEW);
REVIEW.belongsTo(PROFESIONAL);

PROFESIONAL.hasMany(CONSULT);
CONSULT.belongsTo(PROFESIONAL);

PROFESIONAL.belongsToMany(ESPECILIDAD, {
  through: "PROFESIONAL_ESPECIALDAD",
  timestamps: false,
});
ESPECILIDAD.belongsToMany(PROFESIONAL, {
  through: "PROFESIONAL_ESPECIALDAD",
  timestamps: false,
});

export default PROFESIONAL;