import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={history} hashType={"noslash"} basename="/">
    <App />
  </HashRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
