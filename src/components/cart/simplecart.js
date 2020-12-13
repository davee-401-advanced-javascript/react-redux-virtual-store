import {useSelector} from 'react-redux';

function SimpleCart() {

  let cart = useSelector( state => state.cart.cart);

  console.log('cart: ', cart);

  return (
    <h1> SimpleCart</h1>
  )
}

export default SimpleCart;