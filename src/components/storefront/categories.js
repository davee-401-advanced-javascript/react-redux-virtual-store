import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Categories() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <h2>Browse Our Categories</h2>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>Food</Button>
        <Button>Categories</Button>
        <Button>Three</Button>
      </ButtonGroup>

    </div>
  );
}