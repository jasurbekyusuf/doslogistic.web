export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthDate: Date;
  passportSeriesAndNumber: string;
  passportJshshir: string;
  gender: Gender;
  createdDate: Date;
  updatedDate: Date;
  password: string;
  role: number;
  sortByCountry: number;
}

export enum Gender {
  Man = 1,
  Women = 2
}

