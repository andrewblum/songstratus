import React from 'react';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.spalsh = this.splash.bind(this);
  }

  splash() {
    if (true) {
      return (
        <div className="home-page-box">
          <div className="home-header-text">
            Connect on SongStratus
          </div>
          <div className="home-sub-text">
            Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
          </div>
        </div>
      );
    }
    return (<div>welcome</div>);
  }

  render() {
    return (
      <div>
        {this.splash()}
      </div>
    );
  }
}

export default HomePage;
