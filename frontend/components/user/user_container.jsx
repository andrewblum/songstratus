import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToprops = (dispatch, ownProps) => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToprops)(User);
