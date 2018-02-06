import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UploadFormContainer from './upload_form/upload_form_container';
import PlayControlsContainer from './play_controls/play_controls_container';
import Song from './song/song';
import UserContainer from './user/user_container';

const App = () => (
  <div className="app">
    <header>
      <NavBarContainer/>
    </header>

    <main className="main-content">
      <div className="main-content-box">
        <Route path="/:userId" component={UserContainer}/>
        <Route path="/:userId/:songId" component={Song}/>
      </div>
    </main>

    <footer>
      <PlayControlsContainer/>
    </footer>

    <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>
    <ProtectedRoute exact path="/upload" component={UploadFormContainer}/>
  </div>
);

export default App;
