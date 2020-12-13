const initialState = {
  activeCategory: {},
  categories: [],
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

