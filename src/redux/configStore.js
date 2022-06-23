import { combineReducers, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'react-logger';
import { countryReducer } from './country';
import { regionReducer } from './region';

const reducer = combineReducers({
  country: countryReducer,
  region: regionReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk, logger));

export default store;
