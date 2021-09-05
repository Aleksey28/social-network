import { Redirect, Route } from 'react-router';
import React from 'react';

interface Props {
  path: string;
  render: any;
  condition: any;
  to: string;
}

const ProtectedRoute: React.FC<Props> = ({ path, render, condition, to }) => {
  return condition
         ? <Route path={path} render={render}/>
         : <Redirect to={to}/>;
};

export default ProtectedRoute;
