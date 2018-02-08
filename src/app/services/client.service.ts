import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromClient from '../reducers/client.reducer';
import { LoadIndividualAction, SaveIndividualAction } from '../actions/client.actions';
import { NaturalPerson } from '../model/natural-person';

@Injectable()
export class ClientService {
  constructor(private store: Store<fromClient.State>) {}

  get naturalPerson() {
    return this.store.select(s => s.naturalPerson);
  }

  getIndividual(id: string) {
    this.store.dispatch(new LoadIndividualAction(id));
  }

  saveIndividual(person: NaturalPerson) {
    this.store.dispatch(new SaveIndividualAction(person));
  }
}
