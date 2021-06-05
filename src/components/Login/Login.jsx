import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';

function LoginForm( { handleSubmit } ) {
  return (
    <form onSubmit={ handleSubmit }>
      <Field name="email" placeholder="Email" component={ Input } validate={ [required, maxLength30] }/>
      <Field name="password" placeholder="Password" component={ Input } validate={ [required, maxLength30] }/>
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
