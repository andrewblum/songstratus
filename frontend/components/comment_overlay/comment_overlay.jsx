import React from 'react';

class CommentOverlay extends React.Component {
  componentDidMount() {
    this.props.fetchSongsComments(this.props.match.params.songId);
  }

  render() {
    return (
      <div className='comment-overlay-box'>
        hi
      </div>
    );
  }
}

export default CommentOverlay;
