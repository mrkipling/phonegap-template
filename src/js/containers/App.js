import React from 'react';
import CSSModules from 'react-css-modules';

import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Paper from 'material-ui/Paper';

import styles from './styles.scss';

class App extends React.Component {
  render() {
    return (
      <section styleName="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" styleName="icon-button">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" styleName="title">
              Hello World
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="card">12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="card">6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="card">6</Paper>
          </Grid>
        </Grid>
      </section>
    );
  }
}

export default CSSModules(App, styles);
