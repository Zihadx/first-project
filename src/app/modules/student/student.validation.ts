import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .min(3)
    .max(20)
    .required()
    .pattern(/^[A-Z]/)
    .messages({
      'string.pattern.base': 'First name should start with a capital letter',
    }),
  middleName: Joi.string().allow('').optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base':
        'Last name should contain only alphabetic characters',
    }),
});

const guardianValidationSchema = Joi.object({
  father: Joi.string().required(),
  fatherOccupation: Joi.string().trim().required(),
  fatherContact: Joi.string().trim().required(),
  mother: Joi.string().required(),
  motherOccupation: Joi.string().trim().required(),
  motherContact: Joi.string().trim().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().trim().required(),
  contact: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().trim().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string().allow('').optional(),
  email: Joi.string().trim().email().required(),
  contact: Joi.string().trim().required(),
  secondaryContact: Joi.string().trim().required(),
  bloodType: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  presentAddress: Joi.string().trim().required(),
  permanentAddress: Joi.string().trim().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImage: Joi.string().trim().required(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
