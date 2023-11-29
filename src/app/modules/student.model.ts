import { Schema, model } from 'mongoose';

import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required. Please provide the first name.'],
    trim: true,
    maxlength: [20, 'First Name can not be more than 20 character'],
    minlength: [3, 'First Name can not be more less than 3 character'],
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not capitalize format',
    // },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required. Please provide the last name.'],
    trim: true,
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
  },
});

const guardianSchema = new Schema<Guardian>({
  father: { type: String, required: [true, 'Father name is required.'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required.'],
    trim: true,
  },
  fatherContact: {
    type: String,
    required: [true, 'Father contact is required.'],
    trim: true,
  },
  mother: { type: String, required: [true, 'Mother name is required.'] },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required.'],
    trim: true,
  },
  motherContact: {
    type: String,
    required: [true, 'Mother contact is required.'],
    trim: true,
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required.'] },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required.'],
    trim: true,
  },
  contact: {
    type: String,
    required: [true, 'Local guardian contact is required.'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required.'],
    trim: true,
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'ID is required. Please provide an ID.'],
    trim: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required. Please provide a name.'],
    trim: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    }, 
    required: [true, 'Gender is required. Please provide a valid gender.'],
    trim: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: [true, 'Email is required. Please provide an email.'],
    unique: true,
    trim: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not valid',
    // },
  },
  contact: {
    type: String,
    required: [true, 'Contact is required. Please provide a contact.'],
    trim: true,
  },
  secondaryContact: {
    type: String,
    required: [
      true,
      'Secondary contact is required. Please provide a secondary contact.',
    ],
    trim: true,
  },
  bloodType: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    trim: true,
  },
  presentAddress: {
    type: String,
    required: [
      true,
      'Present address is required. Please provide a present address.',
    ],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [
      true,
      'Permanent address is required. Please provide a permanent address.',
    ],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [
      true,
      'Guardian information is required. Please provide valid details.',
    ],
    trim: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [
      true,
      'Local guardian information is required. Please provide valid details.',
    ],
    trim: true,
  },
  profileImage: {
    type: String,
    required: [
      true,
      'Profile image is required. Please provide a profile image.',
    ],
    trim: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
