import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import * as serviceWorker from './serviceWorker';
import { MemoryRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Router 
    history={history}
    initialEntries={["/", "/resume", "/projects", "/contact"]}
    initialIndex={0}
  >
    <App />
  </Router>
  , document.getElementById('root')
);

serviceWorker.unregister();
