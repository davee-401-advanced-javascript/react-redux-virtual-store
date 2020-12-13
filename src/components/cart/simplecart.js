import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



import {deleteFromCart} from '../../store/cart.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function SimpleCart() {

  const classes = useStyles();
  let cart = useSelector( state => state.cart.cart);
  let dispatch = useDispatch();

  const destroy = (product) => {
    dispatch(deleteFromCart(product))
  }
  // console.log('cart: ', cart);

  return (
    <>
    <List component="nav" className={classes.root}>

    {
      cart.map(product => {
        return (

          <ListItem key={product._id} >
            <ListItemText primary={product.name} />
            <IconButton aria-label="delete" onClick={() => destroy(product)}>
              <DeleteIcon />
            </IconButton >
          </ListItem>
        )
      })
    }

    </List>
    </>
  )
}

export default SimpleCart;