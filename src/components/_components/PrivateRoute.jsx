import React from 'react';
import { Route, Redirect } from 'react-router-dom';




// const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
//     const user = localStorage.getItem('user');
//     return <Route {...rest} render={(props) => (
//         user !== null
//             ? <Component {...props} user={user} handleChildFunc={handleChildFunc}/>
//             : <Redirect to='/login' />
//         )} 
//     />
// }

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/about', state: { from: props.location } }} />
            }
            // logged in so return component
            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute }; 