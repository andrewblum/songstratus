import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import UploadFormContainer from './upload/upload_form_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>

    <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>
    <ProtectedRoute exact path="/upload" component={UploadFormContainer}/>
  </div>
);

export default App;
