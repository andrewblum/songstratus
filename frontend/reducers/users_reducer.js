import {
  RECEIVE_USER,
} from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_USER:
      newState = merge({}, state, {[action.user.id]: action.user});
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
