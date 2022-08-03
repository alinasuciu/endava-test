import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from "react-router-dom";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const { createMemoryHistory } = require("history");

const history = createMemoryHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
