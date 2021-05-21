import React from 'react';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { deleteFromCart } from '../../store/cart.js';
import { putStockBack } from '../../store/products.js';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '35vw',
    backgroundColor: 'white',
    marginLeft: '65vw',
    position: 'fixed',
    zIndex: 100,
  },
  items: {
    height: 60,
  },
  checkout: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'gray',
    height: 60,
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'theme.pallete',
    width: '90%',
    marginLeft: '4%',
    marginBottom: 16,
  },
}));

function SimpleCart() {
  const classes = useStyles();
  const dispatch = useDispatch();

  let cart = useSelector((state) => state.cart);
  let showCart = useSelector((state) => state.showCart);

  const destroy = (product) => {
    dispatch(deleteFromCart(product));
    dispatch(putStockBack(product));
  };

  return (
    <>
      <When condition={showCart}>
        <List className={classes.root}>
          {Object.entries(cart).map((product) => {
            return (
              <ListItem key={product[0]}>
                <ListItemText primary={product[1].obj.name} />
                <ListItemText secondary={'QTY: ' + product[1].count} />
                <IconButton aria-label='delete' onClick={() => destroy(product[1])}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            );
          })}
          <Button variant='contained' color='primary' className={classes.button}>
            Checkout
          </Button>
        </List>
      </When>
    </>
  );
}

export default SimpleCart;
