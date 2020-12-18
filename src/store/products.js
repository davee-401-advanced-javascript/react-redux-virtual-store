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


export const decrementStock = (payload) => async dispatch => {

  payload.inStock = payload.inStock-=1;

  await axios({
    method: 'PUT',
    url: `https://davee-auth-api-server.herokuapp.com/api/v1/products/${payload._id}`,
    data: payload
  })

  dispatch(getProducts());
}

export const putStockBack = (payload) => async dispatch => {

  let amount = payload.count;
  let newObj = payload.obj;
  newObj.inStock = newObj.inStock+amount;

  await axios({
    method: 'PUT',
    url: `https://davee-auth-api-server.herokuapp.com/api/v1/products/${newObj._id}`,
    data: newObj
  })
  
  dispatch(getProducts());
}