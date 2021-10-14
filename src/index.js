import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from '../src/app/App.jsx';


ReactDOM.render( 
  <React.StrictMode >
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);