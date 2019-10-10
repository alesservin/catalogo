import React from 'react';

import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ListaProductos from './componentes/productos/ListaProductos.js';
import FormularioProducto from './componentes/productos/FormularioProducto.js';
import About from './componentes/About.js';

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

function Productos({match}){
  console.log(match);
  return(
    <>
      <Route exact path={`${match.path}/nuevo`} component={FormularioProducto} />
      <Route exact path={`${match.path}/editar/:idProducto`} component={FormularioProducto} />
      <Route exact path={`${match.path}`} component={ListaProductos} />
    </>
  );
}

function App(props) {
  const { classes } = props;

  return (
    <>
      <Router>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Catálogo sobre productos electronicos
              </Typography>
              <Button color="inherit">
                <Link style={{textDecoration:'none',color:'white'}} to="">
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={{textDecoration:'none',color:'white'}}
                 to="/about">
                  About
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </div>

        <Route path="" exact component={Productos} />
        <Route path="/productos" component={Productos} />
        {/* <Route exact path={`/nuevo`} component={FormularioProducto} />
        <Route exact path={`/editar/:idProducto`} component={FormularioProducto} /> */}
        <Route path="/about" component={About} />
      </Router>

      <footer>
        <AppBar position="static">
            <Toolbar>
              ¡Muchas gracias por su visita!
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
