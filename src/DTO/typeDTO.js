import { Type } from "@sinclair/typebox";

export const dniDTOSchema = Type.String({
  minLength: 8,
  maxLength: 10,
  errorMessage: {
    minLength: "DNI no valido",
    maxLength: "DNI no valido",
  },
});

export const nameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage: {
    minLength: "name debe tener al menos 2 caracteres de longitud",
    maxLength: "name debe tener como máximo 20 caracteres de longitud",
  },
});

export const surnameDTOSchema = Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage: {
    minLength: "surname debe tener al menos 4 caracteres de longitud",
    maxLength: "surname debe tener como máximo 50 caracteres de longitud",
  },
});



export const skillDTOSchema =Type.String({
    format:'skill',
    
    minLength: 50,
    maxLength: 200,
    errorMessage: {
      minLength: "Skill debe tener al menos 20 caracteres de longitud",
      maxLength: "Skill debe tener como máximo 200 caracteres de longitud",
    },
}
)

export const descriptionDTOSchema = Type.String({
    minLength: 20,
    maxLength: 200,
    errorMessage: {
      minLength: "la descripcion debe tener al menos 20 caracteres de longitud",
      maxLength: "la descripcion debe tener como máximo 200 caracteres de longitud",
    },
  });

  export const linkedinDTOSchema = Type.String({
    minLength: 50,
    maxLength: 200,
    errorMessage: {
      minLength: "la descripcion debe tener al menos 40 caracteres de longitud",
      maxLength: "la descripcion debe tener como máximo 200 caracteres de longitud",
    },
  });


export const emailDTOSchema = Type.String({
  format: "email",
  errorMessage: {
    type: "El tipo del email no es válido, debe ser un string",
    format: "El formato del email no es válido, debe cumplir el RFC 5322",
  },
});

export const passwordDTOSchema = Type.String({
  format: "password",
  minLength: 10,
  maxLength: 25,
  errorMessage: {
    type: "El tipo de la password no es válido, debe ser un string",
    format:
      "El formato de la password, debe contener una mayúscula, una minúcula y un número",
    minLength: "password debe tener al menos 10 caracteres de longitud",
    maxLength: "password debe tener como máximo 25 caracteres de longitud",
  },
});
