import React from 'react';
import WaveForm from '../wave_form/wave_form';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      playpause: 'small-song-play',
      playing: false
    };
    this.onPlayPause = this.onPlayPause.bind(this);
  }

  onPlayPause(e) {
    console.log(this.props.currentSong);
    console.log(this.props.track);
    if (!this.state.playing) {
      if (Object.keys(this.props.currentSong).length === 1
        || this.props.currentSong.song.id !== this.props.track.id) {
          this.props.receiveCurrentSong(this.props.track);
      }
      this.props.playPause(true);
      this.setState({playing: true, playpause: 'small-song-pause'});
    } else {
      this.props.playPause(false);
      this.setState({playing: false, playpause: 'small-song-play'});
    }
  }

  render() {
    return (
      <div className="small-song-box">

        <div className="small-song-art-box">
          <img
            className="small-song-art"
            src={this.props.track.image_url}>
          </img>
        </div>

        <div className="small-song-content">

          <div className="small-song-control-box">

            <div
              className={this.state.playpause}
              onClick={this.onPlayPause}>
            </div>

            <div className="small-song-title-box">
              <div className="small-song-artist">
                {this.props.track.artist}
              </div>
              <div className="small-song-title">
                {this.props.track.title}
              </div>
            </div>
          </div>

          <div className="small-song-waveform">
            <WaveForm track={this.props.track}/>
          </div>
          <div className="small-song-social">
            social
          </div>
        </div>

      </div>
    );
  }
}

export default Song;
