import { ActionReducerMap } from '@ngrx/store';

import * as fromClient from './client.reducer';

export interface AppState {
  client: fromClient.State;
}

export const reducers: ActionReducerMap<AppState> = {
  client: fromClient.clientReducer
};
