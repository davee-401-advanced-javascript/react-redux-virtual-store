import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-around">
          <Grid item xs={12} align="center">
            <Typography variant="h6" color="textPrimary" gutterBottom>
              © Davee Sok
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
