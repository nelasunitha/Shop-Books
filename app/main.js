// This file sets up React
import React from 'react';
import  ReactDOM  from 'react-dom';
//import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './store';
import Routes from './components/Routes';

const main = document.getElementById('main')

ReactDOM.render(
  <Router>

    <Provider store = {store}>
      <Routes />
    </Provider>
  </Router>,
  main
);
