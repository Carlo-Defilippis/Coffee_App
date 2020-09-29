import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import places from './utils/locationapi/places'
import placesfromlocation from './utils/locationapi/placesfromlocation'

ReactDOM.render(
  <React.StrictMode>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/selections" component={Selections} />
      <Route exact path="/promo" component={Promotions} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/checkout" component={CheckOut} />
      <Route exact path="/logout" component={Home} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
