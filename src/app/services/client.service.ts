import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadIndividualAction, SaveIndividualAction } from '../actions/client.actions';
import { NaturalPerson } from '../model/natural-person';
import { AppState } from '../reducers/app.reducer';

@Injectable()
export class ClientService {
  constructor(private store: Store<AppState>) {}

  get registrationId() {
    return this.store.select(s => s.client.registrationId);
  }

  get naturalPerson() {
    return this.store.select(s => s.client.naturalPerson);
  }

  getIndividual(id: string) {
    this.store.dispatch(new LoadIndividualAction(id));
  }

  saveIndividual(person: NaturalPerson) {
    this.store.dispatch(new SaveIndividualAction(person));
  }
}
