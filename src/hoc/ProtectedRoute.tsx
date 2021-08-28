import { Redirect, Route } from 'react-router';

interface ProtectedRouteProps {
  path: string;
  render: any;
  condition: any;
  to: string;
}

function ProtectedRoute ({ path, render, condition, to }: ProtectedRouteProps): JSX.Element {
  return condition
         ? <Route path={path} render={render}/>
         : <Redirect to={to}/>;
}

export default ProtectedRoute;
