import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Wrapper from "./components/Wrapper";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import places from './utils/locationapi/places'
import placesfromlocation from './utils/locationapi/placesfromlocation'
import PayPalExpressBtn from './components/PaypalButton/PayPalButton'
import About from './pages/About'
import Footer from './components/Footer';

const newBtn = new PayPalExpressBtn()

console.log(newBtn)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={About} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/selections" component={Selections} />
          <Route exact path="/promo" component={Promotions} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/checkout" component={CheckOut} /> */}
          <Route exact path="/logout" component={About} />
        </Wrapper>
        <Footer/>
      </div>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
