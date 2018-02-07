import { Registration } from './registration';
import { RequestParty } from './request-party';

export class NaturalPersonRegistration implements Registration {
  readonly type = 'INDIVIDUAL';
  parties: RequestParty[];
  documents: any[];
}
