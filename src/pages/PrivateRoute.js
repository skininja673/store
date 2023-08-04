import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, ...rest }) => {
    const { myUser } = useUserContext();

    console.log('children: ', children);

    return (
        <Route
            {...rest}
            render={() => {
                return myUser ? children : <Redirect to='/'></Redirect>;
            }}
        >
            Private Route
        </Route>
    );
};
export default PrivateRoute;
