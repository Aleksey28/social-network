import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';
import { useHistory } from 'react-router';
import classes from './Login.module.css';

function LoginForm( { handleSubmit, error } ) {
  return (
    <form onSubmit={ handleSubmit } className={ classes.form }>
      <Field name="email" placeholder="Email" component={ Input } validate={ [required, maxLength30] }/>
      <Field name="password"
             placeholder="Password"
             component={ Input }
             validate={ [required, maxLength30] }
             type="password"/>
      <div>
        <Field name="rememberMe" component={ Input } type="checkbox"/>remember me
      </div>
      { error && <span className={ classes.form__error }>{ error }</span> }
      <button type="submit">Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm( {
  form: 'login',
} )( LoginForm );

function Login( { isAuth, login } ) {

  const history = useHistory();
  const handleSubmit = ( formData ) => {
    login( formData );
  };

  if ( isAuth )
    history.push( '/profile' );

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={ handleSubmit }/>
    </div>
  );
}

export default Login;
