import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './application/store';

import './index.css';
import Routes from './application/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
