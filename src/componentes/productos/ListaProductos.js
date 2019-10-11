import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import red from '@material-ui/core/colors/red';

import Producto from './Producto.js'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 130,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

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
    // console.log('render');
    // console.log(match);

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

ListaProductos.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ListaProductos);
