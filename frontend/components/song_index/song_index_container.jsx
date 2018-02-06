import { connect } from 'react-redux';
import SongIndex from './song_index';
import { fetchAllUsersSongs } from '../../actions/song_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let usersTracks = {};
  Object.keys(state.entities.songs).forEach(each =>{
    if (state.entities.songs[each].user_id == ownProps.match.params.userId) {
      usersTracks[each] = (state.entities.songs[each]);
    }
  });
  return {
    tracks: usersTracks
  };
};

const mapDispatchToprops = (dispatch, ownProps) => ({
  fetchAllUsersSongs: (userId) => dispatch(fetchAllUsersSongs(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToprops)(SongIndex));
