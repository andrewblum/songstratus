import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  session: errors
});

export const login = (user) => dispatch => (
  SessionApiUtil.login(user)
    .then(curUser => dispatch(receiveCurrentUser(curUser)),
      errors => dispatch(receiveErrors(errors))
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(curUser => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user)
    .then(curUser => dispatch(receiveCurrentUser(curUser)),
      errors => dispatch(receiveErrors(errors))
    )
);
