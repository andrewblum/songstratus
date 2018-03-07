import React from 'react';
import WaveFormContainer from '../wave_form/wave_form_container';
import { Link } from 'react-router-dom';

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
    if (this.props.currentSong.song.id == -1
        || this.props.currentSong.song.id !== this.props.track.id) {
          this.props.receiveCurrentSong(this.props.track);
    }
    if (this.props.currentSong.song.id !== this.props.track.id
        && this.props.playing) {
    } else {
      this.props.playPause(!this.props.playing);
    }
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
          <Link
            to={`${this.props.track.user_id}/${this.props.track.id}`}>
            <img
              className="small-song-art"
              src={this.props.track.image_url}>
            </img>
          </Link>
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
                <Link
                  className="song-title-link"
                  to={`${this.props.track.user_id}/${this.props.track.id}`}>
                  {this.props.track.title}
                </Link>
              </div>
            </div>
          </div>

          <div className={`small-song-waveform ${this.state.playing_focused}`}>
            <WaveFormContainer
              displayComments={false}
              track={this.props.track}
              height={60}
              color={"#666"}
            />
          </div>
          <div className="small-song-footer">
            <div className="small-song-footer-left">

            </div>
            <div className="small-song-footer-right">
              <div className="small-song-footer-plays">
                {this.props.track.play_count}
              </div>

              <Link
                className="small-song-footer-comments-link"
                to={`${this.props.track.user_id}/${this.props.track.id}`}>
                <div className="small-song-footer-comments">
                  {this.props.track.num_comments}
                </div>
              </Link>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Song;
