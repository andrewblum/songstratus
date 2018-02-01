import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return null;
    case CLEAR_SESSION_ERRORS:
      return null;
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
