import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
<Grid item xs={15}>
    <center>
    <h2>Miembros del Equipo</h2>
    </center>

</Grid>

    
    <br></br>
    <Grid container spacing={24}>

      <Grid item xs={4}>
        <Paper className={classes.paper}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="350"
          image="Ale.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alejandro Servin
          </Typography>
          <Typography component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Link to LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Link to Mail">
            <MailIcon />
          </IconButton>
      </CardActions>
      </Card>
      </Paper>
        </Grid>

        <Grid item xs={4}>
        <Paper className={classes.paper}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="350"
          image="Lucas.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lucas Arce
          </Typography>
          <Typography component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Link to LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Link to Mail">
            <MailIcon />
          </IconButton>
      </CardActions>
      </Card>
      </Paper>
        </Grid>

        <Grid item xs={4}>
        <Paper className={classes.paper}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="350"
          image="Suely.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Suely Lopez Coronel
          </Typography>
          <Typography component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="Link to LinkedIn">
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Link to Mail">
            <MailIcon />
          </IconButton>
      </CardActions>
      </Card>
      </Paper>
        </Grid>


      </Grid>



      
    </div>
  );
  }
ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ImgMediaCard);