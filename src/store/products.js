const intialState = [];

export default function reducer( state = intialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "INITIALIZEPRODUCTS":
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