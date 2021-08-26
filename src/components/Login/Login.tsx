import { Field, reduxForm } from 'redux-form';
import React, { FormEventHandler } from 'react';
import { Input } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';
import { useHistory } from 'react-router';
import classes from './Login.module.css';

interface LoginFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  error: string;
  captchaUrl: string;
}

interface LoginProps {
  isAuth: boolean;
  login: any;
  captchaUrl: string;
}

interface FormData {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string | null;
}

function LoginForm( { handleSubmit, error, captchaUrl }: LoginFormProps ) {
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
      { !!captchaUrl && (
        <div>
          <img src={ captchaUrl } alt="captcha"/>
          <Field name="captcha" placeholder="Text from image" component={ Input }/>
        </div>
      ) }
      { error && <span className={ classes.form__error }>{ error }</span> }
      <button type="submit">Login</button>
    </form>
  );
}

const LoginReduxForm = reduxForm( {
  form: 'login',
// @ts-ignore
} )( LoginForm );

function Login( { isAuth, login, captchaUrl }: LoginProps ): JSX.Element {

  const history = useHistory();
  const handleSubmit = (( formData: FormData ) => {
    login( formData );
  });

  if ( isAuth )
    history.push( '/profile' );

  return (
    <div>
      <h1>LOGIN</h1>
      {/*@ts-ignore*/}
      <LoginReduxForm onSubmit={ handleSubmit } captchaUrl={ captchaUrl }/>
    </div>
  );
}

export default Login;
