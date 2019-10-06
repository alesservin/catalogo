import React from 'react';

import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ListaProductos from './componentes/productos/ListaProductos.js'

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

      <ListaProductos />

      <footer>
        <AppBar position="static">
            <Toolbar>
            <center>
              ¡Muchas gracias por su visita!
            </center>
            </Toolbar>
        </AppBar>
      </footer>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
