import React from 'react';
import WaveFormContainer from '../wave_form/wave_form_container';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      playpause: 'small-song-play',
      playing: false,
      playing_focused: ''
    };
    this.onPlayPause = this.onPlayPause.bind(this);
  }

  onPlayPause(e) {
    if (Object.keys(this.props.currentSong).length === 2
        || this.props.currentSong.song.id !== this.props.track.id) {
          this.props.receiveCurrentSong(this.props.track);
    }
    this.props.playPause(!this.props.playing);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentSong.song.id == newProps.track.id && newProps.playing) {
      this.setState({playing: true, playpause: 'small-song-pause'});
      this.setState({playing_focused: 'playing-focus'});
    } else {
      this.setState({playing: false, playpause: 'small-song-play'});
      this.setState({playing_focused: ""});
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

          <div className={`small-song-waveform ${this.state.playing_focused}`}>
            <WaveFormContainer track={this.props.track}/>
          </div>
          <div className="small-song-footer">
            <div className="small-song-footer-left">

            </div>
            <div className="small-song-footer-right">
              <div className="small-song-footer-plays">
                0
              </div>
              <div className="small-song-footer-comments">
                3838
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Song;
