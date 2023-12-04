import { Model } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TGuardian = {
  father: string;
  fatherOccupation: string;
  fatherContact: string;
  mother: string;
  motherOccupation: string;
  motherContact: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contact: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  email: string;
  contact: string;
  secondaryContact: string;
  bloodType?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive?: ['active', 'blocked'];
  isDeleted: boolean;
};

// for creating static

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: id): Promise<TStudent | null>;
}

// for creating instant
// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };
// export type studentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
