import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UploadFormContainer from './upload_form/upload_form_container';
import PlayControlsContainer from './play_controls/play_controls_container';
import FullSongContainer from './full_song/full_song_container';
import UserContainer from './user/user_container';
import HomePage from './home_page/home_page';

const App = () => (
  <div className="app">
    <header>
      <NavBarContainer/>
    </header>

    <main className="main-content">
      <div className="main-content-box">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/:userId" component={UserContainer}/>
        <Route exact path="/:userId/:songId" component={FullSongContainer}/>
      </div>
    </main>

    <footer>
      <PlayControlsContainer/>
    </footer>

    <ProtectedRoute exact path="/upload" component={UploadFormContainer}/>
  </div>
);

export default App;
