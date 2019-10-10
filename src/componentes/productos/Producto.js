import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
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
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

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
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


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


  render() {
    const { classes } = this.props;
    const { match } = this.props;

    const { id } = this.props;
    const { nombre } = this.props;
    const { categoria } = this.props;
    const { precio } = this.props;
    const { imagen } = this.props;
    const { descripcion } = this.props;
    
    return (

      
      <Card className={classes.card}>
        
        <CardHeader
          title={nombre}
          subheader={categoria}
        />
        <CardMedia
          className={classes.media}
          // image="imagenes/iPhone11.jpg"
          image = {imagen}
          title="Iphone 11"
        />
        <CardContent>
          <Typography component="p">
            <CurrencyFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Eliminar" onClick={ () => this.delete(id)}>
            <DeleteIcon />
          </IconButton>
    {/*   <Link to={`${match.path}edit/${id}`}>  */}
          <IconButton arial-label="Editar">
            <EditIcon />
          </IconButton>
     {/*  </Link>   */}
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
      </Card>
    );
  }
}

Producto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Producto);
