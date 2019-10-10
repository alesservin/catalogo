import React from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import CurrencyFormat from 'react-currency-format';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FormularioProducto extends React.Component{
  state = {
    idProducto: '',
    nombre:'',
    descripcion:'',
    precio:'',
    idCategoria:'',
    idProveedor: '',
    favorito: '',
    fechaCompra: '',
    imagen: '',
    borrado: '',
    categorias: [],
    proveedores: [],
  };

  componentDidMount(){
      const { match } = this.props;
      const idProducto = match.params.idProducto;
    //si existe el idProducto, se obtiene el producto por su id
    if (idProducto) {
      // se toma el idProducto
      axios.get('/ws/rest/productos/' + idProducto)
        .then(res => {
          const producto = res.data; // se obtiene las tareas
          this.setState({
            idProducto: producto.id,
            nombre:producto.nombre,
            descripcion:producto.descripcion,
            precio:producto.precio,
            idCategoria:producto.categoria.id,
            idProveedor: producto.proveedor.id,
            favorito: producto.favorito,
            fechaCompra: producto.fechaCompra,
            imagen: producto.imagen,
            borrado: producto.borrado,
          });

        })
        .catch(err => {
          console.log('Error');
          console.log(err);

        })
    }

    // se toman todos los tipos de productos
    axios.get('/ws/rest/categorias/')
      .then(res => {
        const categorias = res.data; // se obtiene las tareas
        let vecCategoria = categorias.map(categoria => (
          { id: categoria.id, nombre: categoria.nombre,
            borrado: categoria.borrado}
        ));
        //se pasa el vector
        this.setState({categorias:vecCategoria}) ;
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      })

    // se toman todos los proveedores
    axios.get('/ws/rest/proveedores/')
      .then(res => {
        const proveedores = res.data; // se obtiene las tareas
        let vecProveedores = proveedores.map(proveedores => (
          { id: proveedores.id, nombre: proveedores.nombre,
          borrado:  proveedores.borrado}
        ));
        //se pasa el vector
        this.setState({proveedores:vecProveedores}) ;
      })
      .catch(err => {
        console.log('Error');
        console.log(err);
      })

  }

  handleChange = date => {
    this.setState({
      fechaCompra: date,
    })
  };

  handleChangeTxt = field => (e) => {

    switch (field) {
      case 'nombre':
        this.setState({nombre: e.target.value});
        break;
      case 'descripcion':
        this.setState({descripcion: e.target.value});
        break;
      case 'precio':
        this.setState({precio: e.target.value});
        break;
      case 'categoria':
        this.setState({idCategoria: e.target.value});
        break;
      case 'proveedor':
        this.setState({idProveedor: e.target.value});
        break;
      case 'imagen':
        this.setState({imagen: e.target.value});
        break;
      default:
        break;

    }

  };


  handleSubmit = event => {
    const {match} = this.props;
    let categoria = null ;
    let proveedor = null;
    let tareaNueva = {};

    event.preventDefault(); // previene que se recargue la pagina, por el submit

    // obtiene el objeto proveedor, de acuerdo al id del proveedor seleccionado
    let vecProveedor = [];
    const idProveedor = this.state.idProveedor;
    vecProveedor = this.state.proveedores
    .filter(prov => prov.id === idProveedor);
    console.log(vecProveedor);

    // obtiene el objeto categoria, de acuerdo al id de
    // la categoria seleccionada
    let vecCategoria = [];
    const idCategoria = this.state.idCategoria;
    vecCategoria = this.state.categorias
    .filter(prov => prov.id === idCategoria);
     console.log(vecCategoria);

     console.log('fecha enviar: '+this.state.fechaCompra);

    tareaNueva = {
      nombre:this.state.nombre,
      descripcion:this.state.descripcion,
      precio:this.state.precio,
      categoria: vecCategoria[0],
      proveedor: vecProveedor[0],
      favorito: this.state.favorito,
      fechaCompra: this.state.fechaCompra,
      imagen: this.state.imagen,
      borrado: this.state.borrado,

    };

    // se existe productosId, se actualiza o agrga un nuevvo registro
    if (match.params.idProducto) {
        // SE ACTUALIZA EL REGISTRO
        axios.put('/ws/rest/productos/' + match.params.idProducto, tareaNueva )
          .then(response => {
            alert('Actualizado con éxito');
          })
          .catch(error => {
            console.log(error);
            alert('Error: no se ha podido actualizar el registro');
          });
    }
    else // si no hay idProducto
    {
      // SE GUARDA UN NUEVOO REGISTRO
      axios.post('/ws/rest/productos/', tareaNueva )
        .then(res => {
          alert('Registrado con éxito');
        })
        .catch(err => {
          console.log('Error');
          console.log(err);
          alert('Ha ocurrido un error y no se ha podido guardar el registro');
        })
    }


  }

  handleChangeCheckBoxFavoritos = event => {
    this.setState({ favorito: event.target.checked });
  }


  render(){
    const { match } = this.props;
    const { classes } = this.props;

    return(
      <>
        <Card>
          <CardContent>
            <form name="formTarea"
            onSubmit={this.handleSubmit } >
            <center>
              <h3>
                {match.params.idProducto ? "Editar producto"  : "Agregar nueva producto"}
              </h3>
            </center>

            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Nombre: &nbsp;
                  <TextField value={this.state.nombre} isRequired type="text"
                  name="nombre" onChange={this.handleChangeTxt('nombre')}
                  style={{width:'80%'}} /> <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Descripcion: &nbsp;
                  <TextField value={this.state.descripcion} type="text" name="descripcion"
                  onChange={this.handleChangeTxt('descripcion')}
                  style={{width:'80%'}} /> <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Categoría: &nbsp;
                  <Select value={this.state.idCategoria} onChange={this.handleChangeTxt('categoria')}
                  displayEmpty name="tipo" style={{width:'80%'}}>
                    {/* se toman todos los tipos */}
                    { this.state.categorias.map(tipo =>(
                      <MenuItem value={tipo.id}>{tipo.nombre}</MenuItem>
                    ))
                    }
                  </Select> <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Proveedor: &nbsp;
                  <Select value={this.state.idProveedor} onChange={this.handleChangeTxt('proveedor')}
                  displayEmpty name="tipo" style={{width:'80%'}}>
                    // se toman todos los tipos
                    { this.state.proveedores.map(p =>(
                      <MenuItem value={p.id}>{p.nombre}</MenuItem>
                    ))
                    }
                  </Select> <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Precio: &nbsp;
                  <TextField value={this.state.precio} type="number"
                  name="precio"
                  onChange={this.handleChangeTxt('precio')}
                  style={{width:'80%'}} /> <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Favorito: &nbsp;
                  <Checkbox
                    checked={this.state.favorito}
                    onChange={this.handleChangeCheckBoxFavoritos}
                    value="checkedB"
                    color="primary"
                  />
                  <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  Fecha de compra:
                  <DatePicker
                  selected={this.state.fechaCompra}
                  style={{width:'80%'}}
                  name="fechaCompra"
                  value={this.state.fechaCompra}
                  onChange={this.handleChange}
                  />
                  {/*alert(this.state.fechaCompra)*/}
                  {/*
                    <TextField
                    id="date"
                    type="date"
                    defaultValue={this.state.fechaCompra}
                    value={this.state.fechaCompra}
                    className={classes.textField}
                    onChange={this.handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  */}

                <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} >
                  Imagen: &nbsp;
                  <TextField value={this.state.imagen} type="text"
                  name="imagen"
                  onChange={this.handleChangeTxt('imagen')}
                  style={{width:'80%'}} /> <br></br>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Link to='/' >
                    <Button variant="contained">
                      Cancelar
                    </Button>
                </Link>
                  &nbsp;
                  <Button variant="contained" type="submit">Guardar</Button>
                </Paper>
              </Grid>

              </Grid>

            </form>
          </CardContent>
        </Card>
      </>
    );
  }
}

FormularioProducto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormularioProducto);
