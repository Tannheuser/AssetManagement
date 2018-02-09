import { NaturalPerson } from '../model/natural-person';
import { ClientAction, ClientActionTypes } from '../actions/client.actions';


export interface State {
  naturalPerson: NaturalPerson;
  registrationId: string;
}

const initialState: State = {
  naturalPerson: null,
  registrationId: null
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
        registrationId: action.payload
      };
    case ClientActionTypes.SaveIndividualFailed:
    case ClientActionTypes.CleanIndividual:
      return {
        ...state,
        registrationId: null
      };
    default:
      return state;
  }
}
