import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {

    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <center>
<Grid item xs={4}>

    <h2>Miembros del Equipo</h2>


</Grid>
</center>

    <br></br>
    <center>
    <Grid container spacing={24} margin= '0' >

      <Grid item xs={4}>
        <Paper className={classes.paper}>
    <Card className={classes.card}>

      <CardActionArea>
        <CardMedia
          component="img"
          alt="Team Members"
          className={classes.media}
          height="350"
          image="Ale.jpg"
          title="Alejandro"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Alejandro Servin
          </Typography>
          <Typography className="subt" component="p">
            Desarrollo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <IconButton aria-label="Link to Mail">
            <MailIcon />
          </IconButton>
          <p>alejandro.servin@upa.edu.py</p>
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
          alt="Team Members"
          className={classes.media}
          height="350"
          image="Lucas.jpeg"
          title="Lucas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lucas Arce
          </Typography>
          <Typography className="subt" component="p">
            Desarrollo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <IconButton aria-label="Link to Mail">
            <MailIcon />
          </IconButton>
          <p>lucas.arce@upa.edu.py</p>
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
          alt="Team Members"
          className={classes.media}
          height="350"
          image="Suely.jpeg"
          title="Suely"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Suely Lopez Coronel
          </Typography>
          <Typography className="subt" component="p">
            Desarrollo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <IconButton aria-label="Link to Mail">
            <MailIcon />
          </IconButton>
          <p>suely.lopez@upa.edu.py</p>
      </CardActions>
      </Card>
      </Paper>
        </Grid>


      </Grid>

      </center>


    </div>
  );
  }
ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(ImgMediaCard);
