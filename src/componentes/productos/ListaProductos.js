import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Producto from './Producto.js'

class ListaProductos extends React.Component{
  render(){
    return(
      <>
        <Grid container spacing={3} style={{padding:'2%'}}>
          <Grid item xs={3}>
            <Producto />
          </Grid>
          <Grid item xs={3}>
            <Producto />
          </Grid>
          <Grid item xs={3}>
            <Producto />
          </Grid>
          <Grid item xs={3}>
            <Producto />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default ListaProductos;
