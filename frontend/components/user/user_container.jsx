import { fetchUser, updateUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.session.currentUser
});

const mapDispatchToprops = (dispatch, ownProps) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (userId, userData) => dispatch(updateUser(userId, userData))
});

export default connect(mapStateToProps, mapDispatchToprops)(User);
