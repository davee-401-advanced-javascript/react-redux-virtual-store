const initialState = {}

export default function reducer( state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "ADDTOCART":

      if(!state[payload._id]) {
        let newState = {
          ...state,
          [payload._id]: {
            obj: payload,
            count: 1
          }
        }
        return newState; 
      } else {
        let newState = {
          ...state,
          [payload._id]: {
            obj: payload,
            count: state[payload._id].count+=1
          }
        }
        return newState;
      }

    case  "DELETEFROMCART":

      let newState = {...state}
      delete newState[payload.obj._id];
      return newState;
      

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