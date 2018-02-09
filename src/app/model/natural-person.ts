import { PostalAddress } from './postal-address';

export class NaturalPerson {
  firstName: string;
  lastName: string;
  initials: string;
  nationality: string;
  sex: string;
  socialSecurityNumber: string;
  dateOfBirth: string;
  countryOfBirth: string;
  placeOfBirth: string;
  phone: string;
  email: string;
  address: PostalAddress;

  constructor() { }
}
