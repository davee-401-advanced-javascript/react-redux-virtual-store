import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import { changeCategory } from '../../store/categories.js';


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
  const dispatch = useDispatch();
  const categories = useSelector( (state) => state.category.categories);

  const changeActive = (category) => {
    dispatch(changeCategory(category));
  }

  return (

    <div className={classes.root}>
      <h2>Browse Our Categories</h2>

      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

        {
          categories.map(category => {
            return (
              <Button key={category._id} onClick={()=> changeActive(category)}>{category.name}</Button>
            )
          })
        }
      
      </ButtonGroup>

    </div>
  );
}