import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Reboot from 'material-ui/Reboot';

import '../sass/site.scss';

import App from './containers/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <div>
        <Reboot />
        <Component />
      </div>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
