import * as React from 'react';
import { Route } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import places from './utils/locationapi/places'
import placesfromlocation from './utils/locationapi/placesfromlocation'
import PayPalExpressBtn from './components/PaypalButton/PayPalButton'

const newBtn = new PayPalExpressBtn()

console.log(newBtn)

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* <Route exact path="/" component={places} /> */}
      {/* <Route exact path="/" component={PayPalExpressBtn} /> */}
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
