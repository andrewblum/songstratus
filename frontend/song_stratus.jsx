import Root from './components/root';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import React from 'react';

//testing
import { login } from './actions/session_actions';
//

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  //end testing


  ReactDOM.render(<Root store={ store }/>, root);
});
