import { Action } from '@ngrx/store';
import { NaturalPerson } from '../model/natural-person';

export enum ClientActionTypes {
  CleanIndividual = '[Client] Clean Individual',
  LoadIndividual = '[Client] Load Individual',
  LoadIndividualComplete = '[Client] Load Individual Complete',
  LoadIndividualFailed = '[Client] Load Individual Failed',
  SaveIndividual = '[Client] Save Individual',
  SaveIndividualComplete = '[Client] Save Individual Complete',
  SaveIndividualFailed = '[Client] Save Individual Failed'
}

export class CleanIndividualAction implements Action {
  readonly type = ClientActionTypes.CleanIndividual;
}

export class LoadIndividualAction implements Action {
  readonly type = ClientActionTypes.LoadIndividual;
  constructor(public payload: string) {}
}

export class LoadIndividualCompleteAction implements Action {
  readonly type = ClientActionTypes.LoadIndividualComplete;
  constructor(public payload: NaturalPerson) {}
}

export class LoadIndividualFailedAction implements Action {
  readonly type = ClientActionTypes.LoadIndividualFailed;
}

export class SaveIndividualAction implements Action {
  readonly type = ClientActionTypes.SaveIndividual;
  constructor(public payload: NaturalPerson) {}
}

export class SaveIndividualCompleteAction implements Action {
  readonly type = ClientActionTypes.SaveIndividualComplete;
  constructor(public payload: string) {}
}

export class SaveIndividualFailedAction implements Action {
  readonly type = ClientActionTypes.SaveIndividualFailed;
}

export type ClientAction =
  CleanIndividualAction |
  LoadIndividualAction |
  LoadIndividualCompleteAction |
  LoadIndividualFailedAction |
  SaveIndividualAction |
  SaveIndividualCompleteAction |
  SaveIndividualFailedAction;
