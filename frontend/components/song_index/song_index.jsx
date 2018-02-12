import React from 'react';
import SongContainer from '../song/song_container';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.fetchAllUsersSongs(this.props.match.params.userId);
  }

  render() {
    if (Object.keys(this.props.tracks).length == 0) {
      return(
        <div className="no-songs-box">
          <div className="no-songs-icon"></div>
          <div className="no-songs-text">
            Nothing to hear here
          </div>
        </div>);
    } else {
      let songs = [];
      Object.keys(this.props.tracks).forEach(each => {
        songs.push(<SongContainer
                    key={each}
                    track={this.props.tracks[each]}/>
                  );
      });
      return (
        <div>
          {songs}
        </div>
      );
    }
  }
}

export default SongIndex;
