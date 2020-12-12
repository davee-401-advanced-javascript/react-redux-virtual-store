import {createStore, combineReducers} from 'redux';

import category from './categories.js';

const reducers = combineReducers({
  category: category,
});

export default createStore(reducers);