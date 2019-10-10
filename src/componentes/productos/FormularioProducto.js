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
            fechaCompra: Date.parse(producto.fechaCompra),
            imagen: producto.imagen,
            borrado: producto.borrado,
          });

        })
        .catch(err => {
          console.log('Error');
          console.log(err);

          this.setState({fechaCompra:Date.parse('Wed Oct 23 2019 00:00:00 GMT-0300') ,});
          console.log('fecha en catch: ' + this.state.fechaCompra);
        })
    }

    // se toman todos los tipos de productos
    // axios.get('/ws/rest/categorias/')
    //   .then(res => {
    //     const categorias = res.data; // se obtiene las tareas
    //     let vecCategoria = categorias.map(categoria => (
    //       { id: categoria.id, nombre: categoria.nombre }
    //     ));
    //     //se pasa el vector
    //     this.setState({categorias:vecCategoria}) ;
    //   })
    //   .catch(err => {
    //     console.log('Error');
    //     console.log(err);
    //   })
    //
    // // se toman todos los proveedores
    // axios.get('/ws/rest/proveedores/')
    //   .then(res => {
    //     const proveedores = res.data; // se obtiene las tareas
    //     let vecProveedores = proveedores.map(proveedores => (
    //       { id: proveedores.id, nombre: proveedores.nombre }
    //     ));
    //     //se pasa el vector
    //     this.setState({proveedores:vecProveedores}) ;
    //   })
    //   .catch(err => {
    //     console.log('Error');
    //     console.log(err);
    //   })

  }


  handleChange = date => {
    this.setState({
      fechaCompra: date,
    })

    console.log(this.state.fechaCompra);

  };

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
