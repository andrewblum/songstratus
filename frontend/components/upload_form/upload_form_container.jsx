import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { uploadSong } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => ({
  songs: state.entities.songs,
  currentUser: state.session.currentUser
});

const mapDispatchToprops = (dispatch, ownProps) => ({
  uploadSong: (song) => dispatch(uploadSong(song))
});

export default connect(mapStateToProps, mapDispatchToprops)(UploadForm);
