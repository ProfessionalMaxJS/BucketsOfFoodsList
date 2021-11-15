import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

//is importing these files here/establishing their route-paths here the best practice? Seems like a cluster at the "root" level

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Route exact path="/">
    <App />
    </Route>

    {/* <Route exact path="/Max">
      < Max />
    </Route>
    <Route exact path="/Okera">
      < Okera />
    </Route>
    <Route exact path="/Pema">
      < Pema />
    </Route>    
     */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
