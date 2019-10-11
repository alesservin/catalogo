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

  /*
  Funcion que ordena un array de objetos
  */
  // function ordenarAsc(p_array_json, p_key) {
  //    p_array_json.sort(function (a, b) {
  //       return a[p_key] > b[p_key];
  //    });
  // }

  componentDidMount(){
    axios.get('/ws/rest/productos/')
      .then(res => {
         let productos = res.data; // se obtiene los productos


         // se ordena los productos por id
         productos = productos.sort(function(a,b){
           return a['id'] < b['id'];
         })

         this.setState({ productos: productos });
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      })
  }

  handleChangeCheckBoxFavoritos = event => {
    this.setState({ checked: event.target.checked });

    this.state.productos.map(p =>{
      console.log(p.favorito);
    })

    //verificar si el checkbox está en true o false
    if (event.target.checked === true) {
      // si es true, ordenar la lista de productos por favoritos
      let productos = this.state.productos; // se obtiene los productos

      // se ordena los productos por id
      productos = productos.sort(function(a,b){
        return a['favorito'] < b['favorito'];
      })
      this.setState({ productos: productos });

    }
    else {
      // si es false, NO ORDENAR por favoritos
      let productos = this.state.productos; // se obtiene los productos
      // se ordena los productos por id
      productos = productos.sort(function(a,b){
        return a['id'] < b['id'];
      })
      this.setState({ productos: productos });

    }
  };



  render(){
    const { match } = this.props;
    console.log('render');
    console.log(match);

    return(
      <>
        <Grid container spacing={3} style={{padding:'2%'}}>
          <Grid item xs={5}>
              <Link
              to={`/productos/nuevo`}>
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


              <Producto match={match} objetoProducto={p} />

          
          ))}
        </Grid>
      </>
    );
  }
}

export default ListaProductos;
