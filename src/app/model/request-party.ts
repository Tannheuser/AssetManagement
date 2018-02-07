import { LegalEntity } from './legal-entity';
import { NaturalPerson } from './natural-person';

export class RequestParty {
  documents: any[];
  legalEntity: LegalEntity;
  naturalPerson: NaturalPerson;
  parties: RequestParty[];
}
