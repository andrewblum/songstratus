import React from 'react';

class CommentOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.overlay = this.overlay.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongsComments(this.props.match.params.songId);
  }

  overlay() {
    let comments = [];
    Object.keys(this.props.comments).forEach(each => {
      let pos = parseInt((this.props.comments[each].time / this.props.duration) * 780);
      console.log(pos);
      comments.push(
        <div className="wave-form-comment fake-box"
             style={{marginLeft: pos + "px"}}
             key={each}>
          <img src={this.props.comments[each].user_image}></img>
        </div>
      );
    });
    if (this.props.comments.length === 0) {
      return (<div></div>);
    }
    return comments;
  }

  render() {
    let comments = this.overlay();
    console.log(this.props.comments);
    return (
      <div className='comment-overlay-box'>
        {comments}
      </div>
    );
  }
}

export default CommentOverlay;
