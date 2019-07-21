import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Wrapper, Block } from 'components/ui';
import Header from 'components/Header';
import List from 'components/List';
import Pagination from 'containers/Pagination';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Block>
          <List />
          <Pagination />
        </Block>
      </Wrapper>
    </Provider>
  );
}

export default App;
