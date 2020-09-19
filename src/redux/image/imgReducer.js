import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {
  
  fetchImagesSuccess,
  fetchImagesError,
} from './imgActions';

const images = createReducer([], {
  [fetchImagesSuccess]: (state, {payload}) => payload,
});

const error = createReducer(null, {
  [fetchImagesError]: (state, {payload}) => payload,
});

export default combineReducers({
  images,
  error,
});
