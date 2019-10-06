import React from 'react';

import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import RecipeReviewCard from './componentes/listaProductos.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grow: {
  flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <>
      <header>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Catálogo
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
            </Toolbar>
          </AppBar>
        </div>
      </header>

      <Grid container spacing={3} style={{padding:'2%'}}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 producto 2</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 producto 4</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3 producto 5</Paper>
        </Grid>
      </Grid>

      <footer>
        Footer
      </footer>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
