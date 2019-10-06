import React from 'react';

import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <>
      <div className={classes.root}>
        <Grid container direction="column" justify="center" spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <header>
                contenido
              </header>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <footer>
              Footer
              </footer>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
