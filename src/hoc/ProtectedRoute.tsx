import { Redirect, Route, RouteComponentProps } from 'react-router';
import React from 'react';

interface Props {
  path: string;
  render: (props: RouteComponentProps) => React.ReactNode
  condition: boolean;
  to: string;
}

const ProtectedRoute: React.FC<Props> = ({ path, render, condition, to }) => {
  return condition
         ? <Route path={path} render={render}/>
         : <Redirect to={to}/>;
};

export default ProtectedRoute;
