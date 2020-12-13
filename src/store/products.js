const intialState = {
  products: []
}

export default function reducer( state = intialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "INITIALIZEPRODUCTS":
      return {
        ...state,
        products: payload
      }
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