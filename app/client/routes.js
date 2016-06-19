import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/configureStore';
import App from './react/App';

export default (
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);
