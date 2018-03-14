import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchTopSongs } from '../../actions/song_actions';

export const mapStateToProps = (state, ownProps) => {
  let songs = Object.values(state.entities.songs);
  songs.sort((b, a) => a.play_count - b.play_count);
  return {
    currentUser: state.session.currentUser,
    tracks: songs
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchTopSongs: () => dispatch(fetchTopSongs())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
