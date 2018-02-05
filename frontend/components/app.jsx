import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UploadFormContainer from './upload_form/upload_form_container';
import PlayControls from './play_controls/play_controls';
import WaveForm from './wave_form/wave_form';

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>

    <main>
      <WaveForm/>
    </main>

    <footer>
      <PlayControls/>
    </footer>

    <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>
    <ProtectedRoute exact path="/upload" component={UploadFormContainer}/>
  </div>
);

export default App;
