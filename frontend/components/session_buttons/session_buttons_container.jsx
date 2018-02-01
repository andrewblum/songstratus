import { connect } from 'react-redux';
import SessionButtons from './session_buttons';
import { logout } from '../../actions/session_actions';

export const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
