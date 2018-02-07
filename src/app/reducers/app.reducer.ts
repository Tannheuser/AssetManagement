import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  client: any;
}

export const reducers: ActionReducerMap<AppState> = {
  client: null
};
