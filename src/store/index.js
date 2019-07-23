import { combineReducers, createStore } from 'redux';
import adsReducer from './ads/reducer';

const INITIAL_STATE = {};
const reducers = combineReducers({
  ads: adsReducer,
});

export default createStore(
  reducers,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
