import { connect } from 'react-redux';
import SessionFrom from './session_form';
import { login,
         logout,
         signup,
         clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.location.pathname === '/login' ? 'Log In' : 'Sign Up'
});

const mapDispatchToprops = (dispatch, ownProps) => {
  const processForm = ownProps.location.pathname === '/login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(SessionFrom);
