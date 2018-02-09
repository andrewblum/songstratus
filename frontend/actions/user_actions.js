import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = (userId) => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(returnedUser => {
      dispatch(receiveUser(returnedUser));
      return returnedUser;
      }
    )
);

export const updateUser = (userId, userData) => dispatch => (
  UserApiUtil.updateUser(userId, userData)
    .then(updatedUser => dispatch(receiveUser(updatedUser)))
);
