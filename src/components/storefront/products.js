import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { When } from 'react-if';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import {addToCart} from '../../store/cart.js';
import {decrementStock} from '../../store/products.js';


const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));


function Products() {

  const classes = useStyles();
  const dispatch = useDispatch();
  
  let activeCategory = useSelector( (state) => state.category.activeCategory);

  let products = useSelector( (state) => state.products);
  products = products.filter( product => product.category === activeCategory.name);


  const add = (product) => {
    dispatch(addToCart(product));
    dispatch(decrementStock(product));

    // decrement one from product
  }

  console.log('products:', products);

  return (

    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="stretch">
          {/* why 3 specs here? on a small screen, use 12 grid spots, 6 on a small screen, 4 on medium+ */}
          {/* In other words, 1 accross, 2 accross, or 3 accross */}

          {
            products.map(product => {
              return (

                <Grid item xs={12} sm={6} md={4} key={product._id}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={product.imageUrl}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          In Stock:{product.inStock}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <When condition={product.inStock > 0}>
                        <Button onClick={() => add(product)} size="small" color="primary">
                          Add to Cart
                        </Button>
                      </When>
                      <Button size="small" color="primary">
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

              )
            })
          }


        </Grid>
      </Container>
    </>
  );
}

export default Products;