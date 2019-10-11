import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

  delete = id => {
    // se borra la tarea
    axios.delete('/ws/rest/productos/' + id)
    .then(res => {
      //volver a cargar la lista de tareas
      axios.get('/ws/rest/productos')
        .then(res => {
          const productos = res.data; // se obtiene las tareas
          this.setState({ productos: productos });
        })
        .catch(err => {
          console.log('Error');
          console.log(err);
        })

      alert('Borrado con éxito');

    })
    .catch(err => {
      console.log('Error');
      console.log(err);
    })

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
    console.log('render');
    console.log(match);
    const { classes } = this.props;
    const { id } = this.props;   
    
   

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
            <Grid item xs={3}>

              <Producto id={p.id} nombre={p.nombre} categoria={p.categoria.nombre}
              precio={`Precio: ${p.precio}`} imagen={p.imagen} descripcion={p.descripcion}  match={match}/>
              
              <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Eliminar" onClick={ () => this.delete(p.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton arial-label="Editar" component={Link} to={`/productos/editar/${id}`}>
            <EditIcon />
          </IconButton> 
        </CardActions>
            </Grid>
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
