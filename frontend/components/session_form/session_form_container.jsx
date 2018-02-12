import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionFrom from './session_form';
import { login,
         logout,
         signup,
         clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.sessionType === 'login' ? 'Log In' : 'Sign Up'
});

const mapDispatchToprops = (dispatch, ownProps) => {
  const processForm = ownProps.sessionType === 'login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    login: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(SessionFrom));
