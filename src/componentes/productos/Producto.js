import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CurrencyFormat from 'react-currency-format';
import { Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

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

class Producto extends React.Component {
  state = { expanded: false,
    producto: {},
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  delete = objetoProducto => {

    // se consulta si está seguro de si quiere eliminar el producto
    if (window.confirm("¿Desea eliminar el producto "
    + objetoProducto.nombre + "?"))
    {
      // se borra la tarea
      axios.delete('/ws/rest/productos/' + objetoProducto.id)
      .then(res => {

        objetoProducto.borrado = !objetoProducto.borrado;

        this.setState({producto: objetoProducto});

        alert('Borrado con éxito');

      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      })

    }

  }

  changeFavorito = producto => {
    /* se cambia el valor de favorito de producto, si es true a false y
     viceversa */
    producto.favorito = !producto.favorito;

    // SE ACTUALIZA EL REGISTRO
    axios.put('/ws/rest/productos/' + producto.id, producto )
      .then(response => {
         this.setState({producto: producto});
      })
      .catch(error => {
        console.log(error);
        alert('Error: no se ha podido actualizar el registro');
      });

  }

  render() {
    // console.log('render');
    const { classes } = this.props;

    // se toma el objeto producto
    const {objetoProducto} = this.props;

    const { id } = objetoProducto;
    const { nombre } = objetoProducto;
    const categoria = objetoProducto.categoria.nombre;
    const { precio } = objetoProducto;
    const { imagen } = objetoProducto;
    const { descripcion } = objetoProducto;
    const {favorito} = objetoProducto;
    const {borrado} = objetoProducto;

    return (
      <>
      {/* si el producto no está eliminado, display = block
        si el producto está eliminado, display = false.*/}

      {/*<Grid item xs={3} style={{display:'block'}}> */}
      <Grid item xs={3} style={{display: borrado ? 'none' : 'block' }}>
        <CardHeader
          title={nombre}
          subheader={categoria}
        />
        <CardMedia
          className={classes.media}
          // image="imagenes/iPhone11.jpg"
          image = {imagen}
        />
        <CardContent>
          <Typography component="p">
            <CurrencyFormat value={precio} displayType={'text'}
            thousandSeparator={true} prefix={'$'} />
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {/*El color del boton favorito depende de si el state favorito else {
            true o false       color="secondary"       }*/}
          <IconButton
          color={favorito ? "secondary" : "default"}
          aria-label="Add to favorites"
          onClick={ () => this.changeFavorito(objetoProducto)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Eliminar"
          onClick={ () => this.delete(objetoProducto)}>
            <DeleteIcon />
          </IconButton>
          <IconButton arial-label="Editar" component={Link}
           to={`/productos/editar/${id}`}>
            <EditIcon/>
          </IconButton> 
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descripcion:</Typography>
            <Typography paragraph>
            {descripcion}
            </Typography>
          </CardContent>
        </Collapse>
      </Grid>
    </>
    );
  }
}

Producto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Producto);
