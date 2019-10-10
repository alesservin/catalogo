import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <center>Integrantes del grupo</center>
      <Grid container spacing={24}>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <CardHeader
                title="Alejandro Servin "
                subheader="Analisis y Desarrollo"
              />
              <CardMedia
                className={classes.media}
                image="imagenes/auriculares.jpg"
                title=""
              />
              <CardContent>
                <Typography component="p">
                  
          </Typography>
              </CardContent>
              <CardActions className={classes.actions} >
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
              <CardHeader
                title="Lucas Arce "
                subheader=" Desarrollo"
              />
              <CardMedia
                className={classes.media}
                image="imagenes/macbookpro.jpg"
                
              />
              
              <CardContent>
                <Typography component="p">
                 
          </Typography>
          
              </CardContent>
              <CardActions className={classes.actions} >
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
              <CardHeader
                title=" Suely Lopez Coronel "
                subheader="Desarrollo"
              />
              <CardMedia
                className={classes.media}
                img=" "
              />
              <CardContent>
                <Typography component="p">
                 
          </Typography>
              </CardContent>
              <CardActions className={classes.actions} >
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

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);