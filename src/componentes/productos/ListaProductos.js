import React from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import Producto from './Producto.js'

class ListaProductos extends React.Component{
  state = {
    productos: [],
  }

  componentDidMount(){
    axios.get('/ws/rest/productos/')
      .then(res => {
        const productos = res.data; // se obtiene los productos
        this.setState({ productos: productos })
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      })
  }

  render(){
    return(
      <>
        <Grid container spacing={3} style={{padding:'2%'}}>
          {this.state.productos.map(p => (
            <Grid item xs={3}>
              <Producto  />
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default ListaProductos;
