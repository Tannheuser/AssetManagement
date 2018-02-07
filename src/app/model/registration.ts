import { RequestParty } from './request-party';

export interface Registration {
  type: string;
  parties: RequestParty[];
  documents: any[];
}
