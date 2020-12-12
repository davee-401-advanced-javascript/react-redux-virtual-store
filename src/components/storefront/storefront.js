import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {initalizeCategory} from '../../store/categories.js';
import {initalizeProducts} from '../../store/products.js';

import Categories from './categories.js';
import CurrentCategories from './current-category.js';
import Products from './products.js';

function StoreFront() {

  const dispatch = useDispatch();
  
  async function getData() {
    let categories = await axios({
        method: 'GET',
        url: 'https://davee-auth-api-server.herokuapp.com/api/v1/categories'
      });
    dispatch(initalizeCategory(categories.data.results));

    let products = await axios({
      method: 'GET',
      url: 'https://davee-auth-api-server.herokuapp.com/api/v1/products'
    });
    dispatch(initalizeProducts(products.data.results));
  }


  useEffect( () => {
    getData();
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <Categories/>
      <CurrentCategories/>
      <Products/>
    </>
  );
}

export default StoreFront;