import {createStore, combineReducers} from 'redux';

import category from './categories.js';
import products from './products.js';
import cart from './cart.js';

const reducers = combineReducers({
  category, products, cart
});

export default createStore(reducers);