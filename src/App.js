import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'App.css';
import Header from 'components/Header';
import AllAds from 'components/AllAds';
import Ads from 'components/Ads';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <>
          <Route exact path="/" component={AllAds} />
          <Route path="/page/:page" component={AllAds} />
          <Route path="/item/:ads" component={Ads} />
        </>
      </Router>
    </Provider>
  );
}

export default App;
