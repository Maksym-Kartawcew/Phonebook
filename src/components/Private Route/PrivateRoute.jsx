import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn} from 'redux/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const logedIn = useSelector(selectIsLoggedIn);

  return logedIn ? children : <Navigate to={redirectTo}/>;
};

export default PrivateRoute;
