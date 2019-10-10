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
    fecha: '',
    imagen: '',
    borrado: '',
    categorias: [],
    proveedores: [],
  };


  handleChange = date => {
    this.setState({
      fecha: date,
    })

    console.log(this.state.fecha.value);

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
                  style={{width:'80%'}}
                  name="fecha"
                  value={this.state.fecha}
                  onChange={this.handleChangeTxt('fecha')}
                  />
                  {/*alert(this.state.fecha)*/}
                  <TextField
                    id="date"
                    type="date"
                    defaultValue={this.state.fecha}
                    value={this.state.fecha}
                    className={classes.textField}
                    onChange={this.handleChangeTxt('fecha')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

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
