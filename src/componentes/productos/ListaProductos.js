import React from 'react';
import axios from 'axios';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';

import Producto from './Producto.js'

class ListaProductos extends React.Component{
  state = {
    productos: [],
    checked: false,
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

  handleChangeCheckBoxFavoritos = event => {
    this.setState({ checked: event.target.checked });

    //verificar si el checkbox está en true o false
    if (event.target.checked === true) {
      // si es true, ordenar la lista de productos por favoritos

    }
    else {
      // si es false, NO ORDENAR por favoritos
    }
  };



  render(){
    const { match } = this.props;

    return(
      <>
        <Grid container spacing={3} style={{padding:'2%'}}>
          <Grid item xs={5}>
              <Link
              to={`${match.path}nuevo`}>
                <Button variant="contained" >
                  + Nuevo
                </Button>
              </Link>
          </Grid>
          <Grid item xs={3}>
            Ordenar por favoritos
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleChangeCheckBoxFavoritos}
              value="checkedB"
              color="primary"
              inputProps={{
                'aria-label': 'secondary checkbox',
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{padding:'2%'}}>
          {this.state.productos.map(p => (
            <Grid item xs={3}>

              {/*<Card className={classes.card}>*/}
              <Card >
                <Producto id={p.id} nombre={p.nombre} categoria={p.categoria.nombre}
                precio={`Precio: ${p.precio}`} imagen={p.imagen} descripcion={p.descripcion}/>
              </Card>

            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default ListaProductos;
