import axios from 'axios';


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
    case "GETCATEGORIES":
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

export const getCategories = () => async dispatch => {
  
  let categories = await axios({
    method: 'GET',
    url: 'https://davee-auth-api-server.herokuapp.com/api/v1/categories'
  });

  dispatch({
    type: 'GETCATEGORIES',
    payload: categories.data.results
  })
}