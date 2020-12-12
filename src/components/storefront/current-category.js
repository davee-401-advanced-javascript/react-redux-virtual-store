import React from 'react';
import {useSelector} from 'react-redux';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  fullHeight: {
    height: "100%"
  },
}));



function CurrentCategories() {

  const classes = useStyles();
  const activeCategory = useSelector( (state) => state.category.activeCategory);


  return (

    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          {activeCategory.name}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          {activeCategory.description}
        </Typography>
      </Container>
    </>

  );
}

export default CurrentCategories;