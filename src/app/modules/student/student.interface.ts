import {} from 'mongoose';

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Guardian = {
  father: string;
  fatherOccupation: string;
  fatherContact: string;
  mother: string;
  motherOccupation: string;
  motherContact: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contact: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contact: string;
  secondaryContact: string;
  bloodType: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: ['active', 'blocked'];
};
