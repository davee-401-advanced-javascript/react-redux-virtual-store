import axios from 'axios';

const intialState = [];

export default function reducer( state = intialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "INITIALIZEPRODUCTS":
      return payload;

    case "GETPRODUCTS":
      return payload;
    default:
      return state;
  }
}

export const initalizeProducts = (productsArray) => {
  return {
    type: 'INITIALIZEPRODUCTS', 
    payload: productsArray
  }
}

export const getProducts = () => async dispatch => {
  
  let products = await axios({
    method: 'GET',
    url: 'https://davee-auth-api-server.herokuapp.com/api/v1/products'
  });

  dispatch({
    type: 'GETPRODUCTS',
    payload: products.data.results
  })
}