import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import Wrapper from "./components/Wrapper";
import './index.css';
import * as serviceWorker from './serviceWorker';
import places from './utils/locationapi/places'
import placesfromlocation from './utils/locationapi/placesfromlocation'
import PayPalExpressBtn from './components/PaypalButton/PayPalButton'
import About from './pages/About'
import Footer from './components/Footer';
import Login from './components/Login/index';
import Signup from './components/signup/index';
import Profile from './components/Profile/index';
import Selection from './components/Selections';
import App from './App';
import Navbar from './components/Navbar'
import Container from './components/Container'
const newBtn = new PayPalExpressBtn()



// const newBtn = new PayPalExpressBtn()

// // console.log('Login route: ', userFunction.getProfile('user'))

// console.log(newBtn)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
      <Navbar/>
      <Container>
        <Wrapper>
          
          <Route exact path="/" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/menu" component={Selection} />
          {/* <Route exact path="/welcome" component={Welcome} /> */}
          {/* <Route exact path="/selections" component={Selections} /> */}
          {/* <Route exact path="/promo" component={Promotions} /> */}
          {/* <Route exact path="/locations" component={Locations} /> */}
          {/* <Route exact path="/order" component={Order} /> */}
          {/* <Route exact path="/checkout" component={CheckOut} /> */}
          {/* <Route exact path="/logout" component={About} /> */}
        </Wrapper>
        </Container>
        <Footer/>
      </div>
    </Router>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
