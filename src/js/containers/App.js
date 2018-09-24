import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  page: {
    padding: 20,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Hello World
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <section className={classes.page}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>6</Paper>
          </Grid>
        </Grid>
      </section>
    </section>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
