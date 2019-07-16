import React from 'react';
import './App.css';
import { Wrapper, Block } from './components/ui';
import Header from './components/Header/Header';

import List from './components/List/List';

const data = require('./data/articles');

function App() {
  return (
    <Wrapper>
        <Header/>
        <Block>
            <List data={data}/>
        </Block>
    </Wrapper>
  );
}

export default App;
