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
    if (!this.props.tracks) {
      return(
        <div>
          <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"></img>
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
