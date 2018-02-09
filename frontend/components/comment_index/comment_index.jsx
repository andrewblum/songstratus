import React from 'react';
import CommentContainer from '../comment/comment_container';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSongsComments(this.props.match.params.songId);
  }

  render() {
    if (!this.props.comments) {
      return(
        <div>
          <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"></img>
        </div>);
    } else {
      let comments = [];
      Object.keys(this.props.comments).forEach(each => {
        comments.push(<CommentContainer
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
