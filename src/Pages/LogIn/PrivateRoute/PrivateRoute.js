import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Redirect, Route } from 'react-router';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
    const { isLoding } = useAuth();
    if (isLoding) {
        <Spinner animation="border" variant="secondary" />

    }
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.email)
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        ></Route>
    );


};

export default PrivateRoute;