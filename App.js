import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigaton} from './src/navigation/AppNavigation';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigaton />
    </Provider>
  );
}
