import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route exact path="/">
    <App />
    </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
