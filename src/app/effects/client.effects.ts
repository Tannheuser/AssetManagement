import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { ClientDataService } from '../services/client-data.service';
import {
  ClientActionTypes, LoadIndividualAction, LoadIndividualCompleteAction,
  LoadIndividualFailedAction
} from '../actions/client.actions';
import { IndividualRegistration } from '../model/individual-registration';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ClientEffects {
  constructor(private actions: Actions, private dataService: ClientDataService) {}

  @Effect()
  loadIndividual = this.actions
    .ofType(ClientActionTypes.LoadIndividual)
    .switchMap((action: LoadIndividualAction) => {
      return this.dataService.fetchIndividual(action.payload)
        .map((result: IndividualRegistration) => new LoadIndividualCompleteAction(result.parties[0].naturalPerson))
        .catch((error: HttpErrorResponse) => {
          console.log('' + error);
          return of(new LoadIndividualFailedAction());
        });
    });
}
