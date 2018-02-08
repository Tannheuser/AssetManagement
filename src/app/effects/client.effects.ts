import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { ClientDataService } from '../services/client-data.service';
import {
  ClientActionTypes,
  LoadIndividualAction,
  LoadIndividualCompleteAction,
  LoadIndividualFailedAction
} from '../actions/client.actions';
import { IndividualRegistration } from '../model/individual-registration';
import { HttpErrorResponse } from '@angular/common/http';
import { NaturalPerson } from '../model/natural-person';

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

  getPersonFromRegistration(registration: IndividualRegistration) {
    return registration.parties && registration.parties.length ?
      registration.parties[0].naturalPerson :
      null;
  }

  generateIndividualRegistration(person: NaturalPerson) {
    // const registration = this.generateIndividualRegistration(action.payload);
    // request.parties = [new RequestParty()]
  }
}
