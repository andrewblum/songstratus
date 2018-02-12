import React from 'react';
import CommentContainer from '../comment/comment_container';
import NoComments from '../no_comments/no_comments';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongsComments(this.props.match.params.songId);
  }

  render() {
    if (Object.keys(this.props.comments) == 0) {
      return(
        <NoComments/>
        );
    } else {
      let comments = [];
      Object.keys(this.props.comments).forEach(each => {
        comments.unshift(<CommentContainer
                      key={each}
                      comment={this.props.comments[each]}/>
                     );
      });
      return (
        <div className="all-comments-box">
          {comments}
        </div>
      );
    }
  }
}

export default CommentIndex;
