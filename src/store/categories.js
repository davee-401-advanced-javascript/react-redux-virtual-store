const initialState = {

  activeCategory: "Food",
  categories: [
    {
      "_id": "5fd41f684c7c920017a6dd9e",
      "name": "Electronics",
      "description": "Electronics Category and stuff",
      "__v": 0
    },
    {
      "_id": "5fd41f7e4c7c920017a6dd9f",
      "name": "Food",
      "description": "Food Category and stuff",
      "__v": 0
    }
  ],
  products: [
    {
      "_id": "5fd420af4c7c920017a6dda0",
      "name": "Samsung TV",
      "description": "Big old tv",
      "price": 799,
      "category": "Electronics",
      "inStock": 20,
      "__v": 0
    },
    {
      "_id": "5fd421354c7c920017a6dda1",
      "name": "Apple Ipad",
      "description": "An Ipad Pro 11in",
      "price": 799,
      "category": "Electronics",
      "inStock": 20,
      "__v": 0
    },
    {
      "_id": "5fd421944c7c920017a6dda2",
      "name": "Macbook Pro 16in",
      "description": "2020 Model with M1 chip",
      "price": 1999,
      "category": "Electronics",
      "inStock": 20,
      "__v": 0
    },
    {
      "_id": "5fd421b94c7c920017a6dda3",
      "name": "Iphone 12 Pro Max",
      "description": "The bigger more expensive one",
      "price": 1199,
      "category": "Electronics",
      "inStock": 20,
      "__v": 0
    },
    {
      "_id": "5fd422254c7c920017a6dda4",
      "name": "Pizza",
      "description": "Fine Italian Food",
      "price": 20,
      "category": "Food",
      "inStock": 30,
      "__v": 0
    },
    {
      "_id": "5fd422444c7c920017a6dda5",
      "name": "Sushi",
      "description": "Japanese Food",
      "price": 30,
      "category": "Food",
      "inStock": 10,
      "__v": 0
    },
    {
      "_id": "5fd4225a4c7c920017a6dda6",
      "name": "Burger",
      "description": "American Food",
      "price": 10,
      "category": "Food",
      "inStock": 10,
      "__v": 0
    }
  ]
}



export default function reducer( state = initialState, action) {

  const {type, payload} = action;

  switch(type) {
    case "ACTIVECATEGORY":
      return { ...state, activeCategory: payload}
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
