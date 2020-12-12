const initialState = {
  activeCategory: {},
  categories: [],
  products: []
}


export default function reducer( state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "ACTIVECATEGORY":
      return { ...state, activeCategory: payload}
    case "INITALIZECATEGORY":
      return { 
        ...state, 
        categories: payload, 
        activeCategory: payload[0]
      }
    case "INITIALIZEPRODUCTS":
      return {
        ...state,
        products: payload
      }
    default:
      return state;
  }
}

export const changeCategory = (category) => {
  return {
    type: "ACTIVECATEGORY", 
    payload: category
  }
}

export const initalizeCategory = (categoryArray) => {
  return {
    type: 'INITALIZECATEGORY',
    payload: categoryArray
  }
}

export const initalizeProducts = (productsArray) => {
  return {
    type: 'INITIALIZEPRODUCTS', 
    payload: productsArray
  }
}