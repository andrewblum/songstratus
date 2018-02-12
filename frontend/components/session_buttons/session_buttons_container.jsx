import { connect } from 'react-redux';
import SessionButtons from './session_buttons';
import { logout, clearSessionErrors } from '../../actions/session_actions';

export const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);
