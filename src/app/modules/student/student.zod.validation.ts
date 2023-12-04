import { z } from 'zod';
const userNameZodValidationSchema = z.object({
  firstName: z
    .string()
    .min(3)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First name should start with a capital letter',
    }),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

const guardianValidationSchema = z.object({
  father: z.string(),
  fatherOccupation: z.string(),
  fatherContact: z.string(),
  mother: z.string(),
  motherOccupation: z.string(),
  motherContact: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contact: z.string(),
  address: z.string(),
});

//   validation using zod

const studentZodValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20),
  name: userNameZodValidationSchema,
  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contact: z.string(),
  secondaryContact: z.string(),
  bloodType: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
  isDeleted: z.boolean(),
});

export default studentZodValidationSchema;
