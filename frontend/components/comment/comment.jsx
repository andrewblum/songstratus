import React from 'react';

class Comment extends React.Component {

  render() {
    console.log(this.props.comment);
    return (
      <div>
        hello:
        {this.props.comment.body}
      </div>
    );
  }

}

export default Comment;
