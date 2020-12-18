import axios from 'axios';

const intialState = [];

export default function reducer( state = intialState, action) {
  const {type, payload} = action;

  switch(type) {

    case "GETPRODUCTS":
      return payload;

    default:
      return state;
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

// need function to decrement instock item, do a put then a get

export const decrementStock = (payload) => async dispatch => {

  let updated = {
    ...payload,
    inStock: payload.inStock-=1
  }
  console.log('updated:', updated);

  await axios({
    method: 'PUT',
    url: `https://davee-auth-api-server.herokuapp.com/api/v1/products/${payload._id}`,
    data: updated
  })

  dispatch(getProducts());
  
}