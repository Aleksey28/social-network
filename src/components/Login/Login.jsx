import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { Input } from '../common/FormsControls/FormsControls';

function LoginForm( { handleSubmit } ) {
  return (
    <form onSubmit={ handleSubmit }>
      <Field name="email" placeholder="Email" component={ Input }/>
      <Field name="password" placeholder="Password" component={ Input }/>
      <div>
        <Field name="rememberMe" component={ Input } type="checkbox"/>remember me
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm( {
  form: 'login',
} )( LoginForm );

function Login( { login } ) {
  const handleSubmit = ( formData ) => {
    login( formData );
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={ handleSubmit }/>
    </div>
  );
}

export default Login;
