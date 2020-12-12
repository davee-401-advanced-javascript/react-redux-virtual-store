import {createStore, combineReducers} from 'redux';

import category from './categories.js';
import products from './products.js';

const reducers = combineReducers({
  category, products
});

export default createStore(reducers);