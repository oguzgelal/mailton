import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from '../redux';

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);
