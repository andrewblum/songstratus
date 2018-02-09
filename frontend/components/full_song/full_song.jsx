import React from 'react';
import { Link } from 'react-router-dom';
import WaveFormContainer from '../wave_form/wave_form_container';
import CommentIndexContainer from '../comment_index/comment_index_container';

class FullSong extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      playPause: "large-song-button large-song-play",
      playingFocused: ''
    };
    this.onPlayPause = this.onPlayPause.bind(this);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId);
    this.props.fetchUser(this.props.match.params.userId);
  }

  onPlayPause(e) {
    if (this.props.currentSong.song.id == -1
        || this.props.currentSong.song.id !== this.props.song.id) {
          this.props.receiveCurrentSong(this.props.song);
    }
    if (this.props.currentSong.song.id !== this.props.song.id
        && this.props.playing) {
    } else {
      this.props.playPause(!this.props.playing);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.playing) this.setState({
      playPause: "large-song-button large-song-pause",
      playingFocused: 'playing-focus'
    });

    if (!newProps.playing) this.setState({
      playPause: "large-song-button large-song-play",
      playingFocused: ''
    });
  }

  render() {
    if (!this.props.song || !this.props.user) {
      return (<div>Loading...</div>);
    }
    return (

      <div className="main-fullsong-view">

        <div className="main-fullsong-top">

          <div className="main-fullsong-left-top">
            <div className="main-fullsong-title-box">

              <div className="main-fullsong-artist-and-title-box">
                <div className={this.state.playPause}
                  onClick={this.onPlayPause}>
                </div>
                <div className="main-fullsong-artist-and-title">
                  <div className="flexbox">
                      <div className="main-fullsong-artist">
                        <Link
                          to={`/${this.props.song.user_id}`}>
                          {this.props.song.artist}
                        </Link>
                      </div>
                  </div>
                  <div className="flexbox">
                    <div className="main-fullsong-title">
                      {this.props.song.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-fullsong-tags-box">
                2 years ago
              </div>

            </div>

            <div className={`main-fullsong-waveform-box
                            ${this.state.playingFocused}`}>
              <WaveFormContainer
                height={110}
                track={this.props.song}
                color={"#fff"}
                />
            </div>


          </div>
            <div className="main-fullsong-image-box">
              <img
                className="main-fullsong-image"
                src={`${this.props.song.image_url}`}/>
            </div>
        </div>

        <div className="main-fullsong-bottom-content-box">


            <div className="main-fullsong-bottom-content">


              <div className="add-comment-box">
                <div className="add-comment-user-img-box">
                  <img
                    className="add-comment-user-img"
                    src={this.props.user.profile_image_url}>
                  </img>
                </div>
                <input
                  className='add-comment-input'
                  type='text'
                  placeholder="Write a comment"
                />
              </div>

              <div className="main-fullsong-comments-box">
                <div className="main-fullsong-comments-left-box">
                  <Link to={`/${this.props.song.user_id}`}>
                    <img
                      className="medium-profile-image-circle"
                      src={this.props.user.profile_image_url}>
                    </img>
                  </Link>
                  <div className="fullsong-comment-artist-name">
                    <Link to={`/${this.props.song.user_id}`}>
                      {this.props.user.username}
                    </Link>
                  </div>
                </div>
                <div className="main-fullsong-comments-right-box">
                  <CommentIndexContainer song={this.props.song.id}/>
                </div>
              </div>

            </div>


            <div className="main-fullsong-sidebar">
              description
            </div>
        </div>
      </div>
    );
  }
}

export default FullSong;
