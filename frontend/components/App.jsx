import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer/>
    </header>

    <AuthRoute exact path="/signup" component={SessionFormContainer}/>
    <AuthRoute exact path="/login" component={SessionFormContainer}/>
  </div>
);

export default App;
