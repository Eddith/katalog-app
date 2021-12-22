import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom"

// import { Provider } from 'react-redux';

// import { store } from './redux/createStore'
 
ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);

