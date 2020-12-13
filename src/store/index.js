import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import category from './categories.js';
import products from './products.js';
import cart from './cart.js';

const reducers = combineReducers({
  category, products, cart
});

const store = () => {
  return createStore( reducers, composeWithDevTools() );
}


export default store();