import { NaturalPerson } from '../model/natural-person';
import { ClientAction, ClientActionTypes } from '../actions/client.actions';


export interface State {
  naturalPerson: NaturalPerson;
}

const initialState: State = {
  naturalPerson: null
};

export function clientReducer(state = initialState, action: ClientAction) {
  switch (action.type) {
    case ClientActionTypes.LoadIndividualComplete:
      return {
        ...state,
        naturalPerson: action.payload
      };
    case ClientActionTypes.LoadIndividualFailed:
      return {
        ...state,
        naturalPerson: null
      };
    case ClientActionTypes.SaveIndividualComplete:
      return {
        ...state,
        naturalPerson: action.payload
      };
    case ClientActionTypes.SaveIndividualFailed:
    default:
      return state;
  }
}
