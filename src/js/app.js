import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';

import theme from './theme';
import '../sass/site.scss';

import App from './containers/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <Reboot />
        <Component />
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
