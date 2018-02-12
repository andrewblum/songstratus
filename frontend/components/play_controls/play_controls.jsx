import React from 'react';
import ReactPlayer from 'react-player';

class PlayControls extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: "",
      playpause: 'play add-pointer',
      played: 0,
      volume: 0.8,
      inSeek: false,
      duration: 0,
    };
    this.pauseOrPlay = this.pauseOrPlay.bind(this);
    this.ref = this.ref.bind(this);
    this.seekClick = this.seekClick.bind(this);
    this.seekUnclick = this.seekUnclick.bind(this);
    this.seekChange = this.seekChange.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  pauseOrPlay() {
    this.props.playPause(!this.props.playing);
  }

  onDuration (duration) {
    this.setState({duration});
  }

  adjustVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  seekClick() {
    this.setState({inSeek: true});
  }

  seekUnclick(e) {
    this.setState({inSeek: false});
    this.player.seekTo(parseFloat(e.target.value));
    this.props.setPlayed(parseFloat(e.target.value));
  }

  seekChange(e) {
    this.setState({played: parseFloat(e.target.value)});
    this.props.setPlayed(parseFloat(e.target.value));
  }

  onProgress(state) {
    if (!this.state.inSeek) this.setState(state);
  }

  ref(player) {
    this.player = player;
  }

  formatTime(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return (
      date.toTimeString().slice(4, 9)
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.song.id !== newProps.song.id) {
      this.setState({url: newProps.song.audio_url},
                    () => this.player.seekTo(0.0));
    }
    if (!newProps.playing) this.setState({playpause: 'play add-pointer'});
    if (newProps.playing) this.setState({playpause: 'pause add-pointer'});
  }

  render () {
    return (
        <div className="play-controls-box">
          <div className="play-controls">
            <ReactPlayer
              url={this.state.url}
              playing={this.props.playing}
              ref={this.ref}
              onProgress={this.onProgress}
              volume={this.state.volume}
              onDuration={this.onDuration}
              width="0px"
              height="0px"
            />
            <button
              onClick={this.pauseOrPlay}
              className={this.state.playpause}>
            </button>

            <div className="song-progress-box">
              <div className="song-progress-duration">
                {this.formatTime(Math.round(this.state.duration * this.state.played))}
              </div>
              <div className="playback-slider">
                <input
                  className="song-progress"
                  type='range' min={0} max={1}
                  step='any'
                  value={this.state.played}
                  onMouseDown={this.seekClick}
                  onMouseUp={this.seekUnclick}
                  onChange={this.seekChange}
                />
                <div className="playback-slider-track"></div>

              </div>
            <div className="song-progress-length">
              {this.formatTime(Math.round(this.state.duration))}
            </div>
            </div>
            <div className="volume-box">
              <div className="volume-icon"></div>
              <div className="relative">
                <div className="volume-groove"></div>
              </div>
              <input
                className="volume"
                type='range' min={0} max={1} step='any'
                value={this.state.volume}
                onChange={this.adjustVolume}
              />
            </div>

          <div className="control-song-info-box">
            <div className="control-song-art">
              <img src={this.props.song.image_url}></img>
            </div>
            <div className="control-song-title-box">
              <div className="control-song-artist">
                {this.props.song.artist}
              </div>
              <div className="control-song-title">
                {this.props.song.title}
              </div>
            </div>
          </div>

          </div>
        </div>
    );
  }
}

export default PlayControls;
