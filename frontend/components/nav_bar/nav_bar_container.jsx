import { connect } from 'react-redux';
import NavBar from './nav_bar';

export const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(NavBar);
