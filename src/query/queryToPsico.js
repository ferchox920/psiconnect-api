import { hash } from "bcrypt";
import AREA from "../models/AREAS.js";
import PROFESSIONAL from "../models/PROFESSIONAL.js";
import SPECIALTY from "../models/SPECIALTY.js";
import { Op } from "sequelize";

const opIlikeProfessional = (text) => {
  return {
    name: {
      [Op.iLike]: `%${text}%`,
    },
    lastName: {
      [Op.iLike]: `%${text}%`,
    },
  };
};

export async function findAllProfessionalByAreaAndNames(area, name, lastName) {
  let data;
  if (area  && name && lastName) {
    data = await PROFESSIONAL.findAll({
      where: {
        [Op.and]: {
          [Op.or]: opIlikeProfessional(name),
          [Op.or]: opIlikeProfessional(lastName),
        },
      },
      include: {
        model: AREA,
        where: {
          area,
        },
      },
    });
  } else if (area && name) {
    data = await PROFESSIONAL.findAll({
      where: {
        [Op.or]: opIlikeProfessional(name),
      },
      include: {
        model: AREA,
        where: {
          area,
        },
      },
    });
  } else if (name && lastName && !area) {
    data = await PROFESSIONAL.findAll({
      where: {
        [Op.and]: {
          [Op.or]: opIlikeProfessional(name),
          [Op.or]: opIlikeProfessional(lastName),
        },
      },
      include: {
        model: AREA,
      },
    });
  } else if (name) {
    data = await PROFESSIONAL.findAll({
      where: {
        [Op.or]: opIlikeProfessional(name),
      },
      include: {
        model: AREA,
      },
    });
  }

  return data;
}
export async function findAllProfessionalWithArea(area) {
  const data = await PROFESSIONAL.findAll({
    include: {
      model: AREA,
      where: {
        area,
      },
    },
  });
  return data;
}

export async function findAllProfessional() {
  const data = await PROFESSIONAL.findAll({
    include:{
      model:AREA
    }
  });
  return data;
}

export async function getProfessionalByEmail(email) {
  const data = await PROFESSIONAL.findOne({ where: { email } });
  return data;
}

export async function getProfessionalByDNI(DNI) {
  const data = await PROFESSIONAL.findOne({ where: { DNI } });
  return data;
}

export async function createProfessionalUser(body) {
  const hashedPassword = await hash(body.password, 10);
  const date = await PROFESSIONAL.create({ ...body, password: hashedPassword });
  return date;
}

export async function getProfessionalById(id) {
  const data = await PROFESSIONAL.findOne({
     where: { id } 
     
    
    });
  return data;
}

export async function setProfessionalDescription(params,body) {
  const data = await PROFESSIONAL.findOne({ where: { id: params} });

  if(!data){
    return null
  }
  data.description = body.description ? body.description : data.description;
  data.skills = body.skills ? body.skills : data.skills;
  data.linkedin = body.linkedin ? body.linkedin : data.linkedin;


  await data.save()
  return data;
}
