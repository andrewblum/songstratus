import React from 'react';
import SongContainer from '../song/song_container';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.spalsh = this.splash.bind(this);
  }

  componentDidMount() {
    this.props.fetchTopSongs();
  }

  splash() {
    console.log(this.props.tracks);
    if (!this.props.currentUser) {
      return (
        <div className="home-page-box">
          <div className="home-header-text">
            Connect on SongStratus
          </div>
          <div className="home-sub-text">
            Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
          </div>
        </div>
      );
    }
    if (this.props.tracks.length == 0) {
      return(
        <div className="loading-home-songs">
          LOADING...
        </div>);
    } else {
      let songs = [];
      this.props.tracks.forEach(each => {
        songs.push(<SongContainer
                    key={each.id}
                    track={each}/>
                  );
      });
      return (
        <div className="home-bottom">
          <div className="home-tracks">
            { songs }
          </div>
          <div className="home-side">
            <div></div>
            <div className="home-side-text">MOST PLAYED TRACKS</div>
            <div className="home-side-sub">2018</div>
          </div>
        </div>
      );
    }
  }


  render() {
    return (
      <div>
        { this.splash() }
      </div>
    );
  }
}

export default HomePage;
