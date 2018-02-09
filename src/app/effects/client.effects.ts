import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import { Actions, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ClientDataService } from '../services/client-data.service';
import {
  ClientActionTypes,
  LoadIndividualAction,
  LoadIndividualCompleteAction,
  LoadIndividualFailedAction,
  SaveIndividualAction,
  SaveIndividualCompleteAction,
  SaveIndividualFailedAction
} from '../actions/client.actions';
import { IndividualRegistration } from '../model/individual-registration';
import { NaturalPerson } from '../model/natural-person';
import { RequestParty } from '../model/request-party';

@Injectable()
export class ClientEffects {
  constructor(private actions: Actions, private dataService: ClientDataService) {
  }

  @Effect()
  loadIndividual = this.actions
    .ofType(ClientActionTypes.LoadIndividual)
    .switchMap((action: LoadIndividualAction) => {
      return this.dataService.fetchIndividual(action.payload)
        .map((result: IndividualRegistration) => {
          const person = this.getPersonFromRegistration(result);
          return new LoadIndividualCompleteAction(person);
        })
        .catch((error: HttpErrorResponse) => {
          console.log('An error has occurred while loading individual registration. Error: ' + error);
          return of(new LoadIndividualFailedAction());
        });
    });

  @Effect()
  saveIndividual = this.actions
    .ofType(ClientActionTypes.SaveIndividual)
    .switchMap((action: SaveIndividualAction) => {
      const registration = this.generateIndividualRegistration(action.payload);
      return this.dataService.registerIndividual(registration)
        .map((result: IndividualRegistration) => {
          return new SaveIndividualCompleteAction(result._id);
        })
        .catch((error: HttpErrorResponse) => {
          console.log('An error has occurred while registering individual. Error: ' + error);
          return of(new SaveIndividualFailedAction());
        });
    });

  private getPersonFromRegistration(registration: IndividualRegistration) {
    return registration.parties && registration.parties.length ?
      registration.parties[0].naturalPerson :
      null;
  }

  private generateIndividualRegistration(person: NaturalPerson) {
    const registration = new IndividualRegistration();
    const party = new RequestParty();
    party.naturalPerson = person;
    registration.parties = [party];

    return registration;
  }
}
