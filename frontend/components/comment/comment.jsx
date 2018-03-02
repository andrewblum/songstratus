import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  handleDelete() {
    this.props.deleteComment(this.props.comment);
  }

  deleteComment() {
    if (this.props.currentUser &&
        this.props.currentUser.id == this.props.comment.user_id) {
      return (
        <div
          onClick={this.handleDelete}
          className="delete-comment">
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  formatTime(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return (
      date.toTimeString().slice(4, 9)
    );
  }

  render() {
    return (
      <div className="comment-box">
        <div className="comment-left">
          <div className="comment-user-pic-box">
            <Link to={`/${this.props.comment.user_id}`}>
              <img className="comment-user-pic"
                   src={this.props.comment.user_image}/>
            </Link>
          </div>
          <div className="comment-content">
            <div className="comment-username">
              <Link to={`/${this.props.comment.user_id}`}>
                {this.props.comment.username}
              </Link>
              <span>at</span>
              <div className="comment-time">
                {this.formatTime(this.props.comment.time)}
              </div>
            </div>

            <div className="comment-body">
              {this.props.comment.body}
            </div>
          </div>
        </div>
        <div className="comment-meta">
          <div className="comment-date">
            {this.props.comment.created_at}
          </div>
          <div className="comment-controls">
            {this.deleteComment()}
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
