import { Redirect, Route } from 'react-router';

function ProtectedRoute( { children, condition, to } ) {
  return <Route>
    {
      () => condition ? children : <Redirect to={ to }/>
    }
  </Route>;
}

export default ProtectedRoute;
