import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  fullHeight: {
    height: "100%"
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Products() {

  const classes = useStyles();


  return (

    <>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="stretch">
          {/* why 3 specs here? on a small screen, use 12 grid spots, 6 on a small screen, 4 on medium+ */}
          {/* In other words, 1 accross, 2 accross, or 3 accross */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader title="Card 1"
                titleTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <Typography variant="h5" color="textPrimary">
                  Check this out!
                </Typography>
                <Typography variant="p" color="textSecondary">
                  And here is some more text that you need to pay attention to.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant='outlined' color="primary">Click Me</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.fullHeight} elevation={0} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.fullHeight} elevation={1} />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default Products;