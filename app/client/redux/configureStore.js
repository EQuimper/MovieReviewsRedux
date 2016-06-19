import { applyMiddleware, compose, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import initialState from './utils/initialState';

const logger = createLogger();

const middleware = [
  logger,
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

// Create the store with the (reducer, initialState, compose)
const store = createStore(
  rootReducer,
  initialState,
  enhancers
);

// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
