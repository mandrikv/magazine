import React from 'react';
import { Provider } from 'react-redux';
import 'App.css';
import Header from 'components/Header';
import AllAds from 'components/AllAds';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AllAds />
    </Provider>
  );
}

export default App;
