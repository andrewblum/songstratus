import React from 'react';
import { Link } from 'react-router-dom';

class Comment extends React.Component {

  render() {
    console.log(this.props.comment);
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
            </div>
            <div className="comment-body">
              {this.props.comment.body}
            </div>
          </div>
        </div>
        <div className="comment-date">
          {this.props.comment.created_at}
        </div>
      </div>
    );
  }
}

export default Comment;
