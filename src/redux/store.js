import {configureStore} from '@reduxjs/toolkit';
import imgReducer from './image/imgReducer';

const store = configureStore({
  reducer: {
    image: imgReducer,
  },
});

export default store;
