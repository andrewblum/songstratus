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
      playingFocused: '',
      comment: {
        body: "",
        time: null,
        user_id: -1,
        song_id: -1
      }
    };
    this.onPlayPause = this.onPlayPause.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.currentUserPhoto = this.currentUserPhoto.bind(this);
    this.setFetchPlayTimeForComment = this.setFetchPlayTimeForComment.bind(this)
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId)
      .then((song) => this.props.fetchUser(this.props.song.user_id));
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

  submitComment(e) {
    if (e.key === 'Enter') {
      this.props.createComment({
        body: this.state.comment.body,
        time: this.props.playTimeForComment,
        user_id: this.props.currentUser.id,
        song_id: this.props.song.id
      });
      this.setState({comment:{body: "", time: null}});
    }
  }

  setFetchPlayTimeForComment() {
    this.props.setFetchPlayTimeForComment(true);
  }

  updateComment(type) {
    return (e) => this.setState({comment: {[type]: e.target.value}});
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
    this.setState({ comment: { time: newProps.playTimeForComment }});
  }

  currentUserPhoto() {
    if (this.props.currentUser) {
      return (
        <img
          className="add-comment-user-img"
          src={this.props.currentUser.profile_image_url}>
        </img>
      );
    } else {
      return (
        <div className="add-comment-user-img default-user-picture">
        </div>
      );
    }
  }

  render() {
    if (!this.props.song || !this.props.pathUser ) {
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
                {this.props.song.created_at}
              </div>
            </div>
            <div className={`main-fullsong-waveform-box
                            ${this.state.playingFocused}`}>
              <WaveFormContainer
                displayComments={true}
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
                  {this.currentUserPhoto()}
                </div>
                <input
                  className='add-comment-input'
                  type='text'
                  placeholder="Write a comment"
                  onKeyPress={this.submitComment}
                  value={this.state.comment.body}
                  onFocus={this.setFetchPlayTimeForComment}
                  onChange={this.updateComment('body')}
                />
              </div>
              <div className="main-fullsong-comments-box">
                <div className="main-fullsong-comments-left-box">
                  <Link to={`/${this.props.song.user_id}`}>
                    <img
                      className="medium-profile-image-circle"
                      src={this.props.users[this.props.song.user_id].profile_image_url}>
                    </img>
                  </Link>
                  <div className="fullsong-comment-artist-name">
                    <Link to={`/${this.props.song.user_id}`}>
                      {this.props.pathUser.username}
                    </Link>
                  </div>
                </div>
                <div className="main-fullsong-comments-right-box">
                  <CommentIndexContainer song={this.props.song.id}/>
                </div>
              </div>
            </div>
            <div className="main-fullsong-sidebar">
              {this.props.song.description}
            </div>
        </div>
      </div>
    );
  }
}

export default FullSong;
