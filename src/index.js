import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import Wrapper from "./components/Wrapper";
import './index.css';
import * as serviceWorker from './serviceWorker';
// import places from './utils/locationapi/places'
// import placesfromlocation from './utils/locationapi/placesfromlocation'
// import PayPalExpressBtn from './components/PaypalButton/PayPalButton'
import About from './pages/About'
import Footer from './components/Footer';
import Login from './components/Login/index';
import signup from './components/signup/index';
import Profile from './components/Profile/index';
import Navbar from './components/Navbar';
import CheckOut from './components/CheckOut/index';
// import * as userFunction from './components/userFunction/index'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HomePage } from './components/HomePage/HomePage'
import { store } from '../src/components/_helpers/index';
import { App } from '../src/components/App/App';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import { PrivateRoute } from './components/_components/PrivateRoute';

    
    
    ReactDOM.render(
        <React.StrictMode>
        <Router>
            <div>
                <Navbar></Navbar>
                <Wrapper>
                    <Provider store={store}>
                    <Route exact path="/" component={About} />
                    {/* <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={signup} />
                    <Route exact path="/profile" component={Profile} />  */}
                            <Route path="/HomePage" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                    </Provider>
                    {/* <Route exact path="/locations" component={Locations} /> */}
                    {/* <Route exact path="/order" component={Order} /> */}
                    {/* <Route exact path="/checkout" component={CheckOut} /> */}
                    {/* <Route exact path="/logout" component={About} /> */}
                </Wrapper>
                <Footer />
            </div>
        </Router>
    </React.StrictMode>,
    document.getElementById('app')
    );
    
    // // // If you want your app to work offline and load faster, you can change
    // // // unregister() to register() below. Note this comes with some pitfalls.
    // // // Learn more about service workers: https://bit.ly/CRA-PWA
    // // serviceWorker.unregister();
    // import React from 'react';
    // import { render } from 'react-dom';
    // import { Provider } from 'react-redux';
    // import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
    // import { store } from './components/_helpers/store';
    // import { App } from './components/App/App';
    // import About from './pages/About'
    // import Footer from './components/Footer';
    // import Navbar from './components/Navbar';
    
    // render(
    //     <Router>
    //         <div>
    //             <Navbar></Navbar>
    //             <Provider store={store}>
    //                 <App />
    //             </Provider>
    //             <Footer />
    //         </div>
    //     </Router>,
    //     document.getElementById('app')
    // );
    

// import * as React from 'react';
// import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import Wrapper from "./components/Wrapper";
// import './index.css';
// import * as serviceWorker from './serviceWorker';
// import places from './utils/locationapi/places'
// import placesfromlocation from './utils/locationapi/placesfromlocation'
// import PayPalExpressBtn from './components/PaypalButton/PayPalButton'
// import About from './pages/About'
// import Footer from './components/Footer';
// import { LoginPage } from './components/LoginPage/LoginPage';
// import { RegisterPage } from './components/RegisterPage/RegisterPage';
// import Profile from './components/Profile/index';
// import Selection from './components/Selections';
// import { App } from './components/App/App';
// import Navbar from './components/Navbar'
// import Container from './components/Container'
// import HomePage from './components/HomePage/HomePage'
// import { store } from './components/_helpers/store'
// import { Provider } from 'react-redux'
// const newBtn = new PayPalExpressBtn()



// // const newBtn = new PayPalExpressBtn()

// // // console.log('Login route: ', userFunction.getProfile('user'))

// // console.log(newBtn)

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <div>
//       <Navbar/>
//       {/* <Container> */}
//         <Wrapper>
//         <Provider store={store}>
//           <Route exact path="/" component={About} />
//           <Route exact path="/login" component={LoginPage} />
//           <Route exact path="/register" component={RegisterPage} />
          
//           <Route exact path="/menu" component={Selection} />
//           {/* <Route exact path="/welcome" component={Welcome} /> */}
//           {/* <Route exact path="/selections" component={Selections} /> */}
//           {/* <Route exact path="/promo" component={Promotions} /> */}
//           {/* <Route exact path="/locations" component={Locations} /> */}
//           {/* <Route exact path="/order" component={Order} /> */}
//           {/* <Route exact path="/checkout" component={CheckOut} /> */}
//           {/* <Route exact path="/logout" component={About} /> */}
//           </Provider>
//           <Footer/>
//         </Wrapper>
//         {/* </Container> */}
      
//       </div>
//     </Router>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();

