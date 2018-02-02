import { connect } from 'react-redux';
import UploadForm from './upload_form';


const mapStateToProps = (state, ownProps) => ({
  state
});

const mapDispatchToprops = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToprops)(UploadForm);
