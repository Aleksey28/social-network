import { Field, reduxForm } from 'redux-form';
import React from 'react';

function LoginForm( { handleSubmit } ) {
  return (
    <form onSubmit={ handleSubmit }>
      <Field name="login" placeholder="Login" component="input"/>
      <Field name="password" placeholder="Password" component="input"/>
      <div>
        <Field name="rememberMe" component="input" type="checkbox"/>remember me
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm( {
  form: 'login',
} )( LoginForm );

function Login() {

  const handleSubmit = ( formData ) => {
    console.log( formData );
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={ handleSubmit }/>
    </div>
  );
}

export default Login;
