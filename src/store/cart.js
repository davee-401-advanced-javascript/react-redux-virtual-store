const initialState = {
  cart: []
}

export default function reducer( state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "ADDTOCART":
      return { cart: [...state.cart, payload]}
    case  "DELETEFROMCART":

      state.cart = state.cart.filter( product => {
        return product._id !== payload._id
      });

      return state;
    default:
      return state; 
  }
}

export const addToCart = (product) => {
  return {
    type: "ADDTOCART",
    payload: product,
  }
}

export const deleteFromCart = (product) => {
  return {
    type: "DELETEFROMCART",
    payload: product
  }
}