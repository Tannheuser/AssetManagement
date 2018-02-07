export class NaturalPerson implements Contacts, BirthDetails {
  dateOfBirth: string;
  countryOfBirth: string;
  placeOfBirth: string;
  phone: string;
  email: string;

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
