import { DataTypes } from "sequelize";
import REVIEW from "./REVIEW.js";
import sequelize from "../config/db.js";
import CONSULT from "./CONSULT.js";
import SPECIALTY from "./SPECIALTY.js";
import AREA from "./AREAS.js";
import SKILLS from "./SKILLS.js";

const PROFESSIONAL = sequelize.define(
  "professional",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
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
    },
    avatar: {
      type: DataTypes.STRING(300),
    },
    description: {
      // hacer otra tabla
      type: DataTypes.TEXT,
    },
    linkedin: {
      
      type: DataTypes.STRING(200),
    },
    password: {
      type: DataTypes.STRING,
    },
    refreshToken:{
      type: DataTypes.STRING
    },
    resetToken:{
      type: DataTypes.STRING
    },
    postRegisterToken:{
      type: DataTypes.STRING
    },
    confirmEmailToken:{
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.ENUM('pending','needConfirm', 'avalible', 'disavalible'),
    },
  },
  {
    timestamps: false,
  }
);

PROFESSIONAL.hasMany(REVIEW);
REVIEW.belongsTo(PROFESSIONAL);

PROFESSIONAL.hasMany(CONSULT);
CONSULT.belongsTo(PROFESSIONAL);

PROFESSIONAL.belongsToMany(SPECIALTY, {
  through: "PROFESSIONAL_SPECIALTY",
  timestamps: false,
});
SPECIALTY.belongsToMany(PROFESSIONAL, {
  through: "PROFESSIONAL_SPECIALTY",
  timestamps: false,
});
PROFESSIONAL.belongsToMany(AREA, {
  through: "PROFESSIONAL_AREA",
  timestamps: false,
});
AREA.belongsToMany(PROFESSIONAL, {
  through: "PROFESSIONAL_AREA",
  timestamps: false,
});
PROFESSIONAL.belongsToMany(SKILLS, {
  through: "PROFESSIONAL_SKILLS",
  timestamps: false,
})
SKILLS.belongsToMany(PROFESSIONAL, {
  through: "PROFESSIONAL_SKILLS",
  timestamps: false,
});

export default PROFESSIONAL;
