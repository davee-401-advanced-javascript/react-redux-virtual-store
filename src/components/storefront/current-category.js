import React from 'react';
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

  return (

    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Food
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Food Description
        </Typography>
      </Container>
    </>

  );
}

export default CurrentCategories;