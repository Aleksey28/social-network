import { Redirect, Route } from 'react-router';

function ProtectedRoute( { path, render, condition, to } ) {
  return condition
         ? <Route path={ path } render={ render }/>
         : <Redirect to={ to }/>;
}

export default ProtectedRoute;
