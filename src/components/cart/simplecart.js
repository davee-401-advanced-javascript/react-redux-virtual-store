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
  let dispatch = useDispatch();
  let cart = useSelector( state => state.cart);

  const destroy = (product) => {
    dispatch(deleteFromCart(product))
  }

  return (
    <>
    <List component="nav" className={classes.root}>

    {
      Object.entries(cart).map(product => {
        return (
          <ListItem key={product[0]} >
            <ListItemText primary={product[1].name}  />
            <ListItemText secondary={'QTY: ' + product[1].count}  />
            <IconButton aria-label="delete" onClick={() => destroy(product[0])}>
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