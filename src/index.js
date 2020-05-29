import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router basename = { process.env.PUBLIC_URL }>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
    ,
  document.getElementById('root')
);