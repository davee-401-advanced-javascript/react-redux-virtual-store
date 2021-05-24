import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

import Categories from './categories.js';
import CurrentCategories from './current-category.js';
import SimpleCart from '../cart/simplecart.js';
import Products from './products.js';

import { getCategories } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';

function StoreFront() {
  const dispatch = useDispatch();
  let [loading, setLoading] = useState(true);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: green;
  `;

  useEffect(() => {
    dispatch(getCategories()).then(setLoading(false));
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <SimpleCart />
      <Categories />
      <div>
        <MoonLoader
          color={'blue'}
          loading={loading}
          css={override}
          size={150}
        />
      </div>
      <CurrentCategories />
      <Products />
    </>
  );
}

export default StoreFront;
