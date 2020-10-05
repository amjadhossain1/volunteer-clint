import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
          loggedInVolunteer.email ? (
              children
            ) : (
              
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
};

export default PrivateRoute;