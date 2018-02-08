import { PostalAddress } from './postal-address';

export class NaturalPerson implements Contacts, BirthDetails, PersonDetails {
  _id: string;
  nationality: string;
  sex: string;
  socialSecurityNumber: string;
  dateOfBirth: string;
  countryOfBirth: string;
  placeOfBirth: string;
  phone: string;
  email: string;
  address: PostalAddress;

  constructor(
    public firstName: string,
    public lastName: string,
    public initials: string,
  ) { }
}

interface PersonDetails {
  nationality: string;
  sex: string;
  socialSecurityNumber: string;
}

interface Contacts {
  phone: string;
  email: string;
}

interface BirthDetails {
  dateOfBirth: string;
  countryOfBirth: string;
  placeOfBirth: string;
}
