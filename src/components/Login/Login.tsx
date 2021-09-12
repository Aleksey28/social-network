import { InjectedFormProps, reduxForm } from 'redux-form';
import React from 'react';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';
import { useHistory } from 'react-router';
import classes from './Login.module.css';
import { LoginProps } from '../../types';

interface Props {
  isAuth: boolean;
  login: (props: LoginProps) => any;
  captchaUrl: string;
}

interface LoginFormProps {
  captchaUrl: string;
}

type LoginFormType = React.FC<InjectedFormProps<LoginProps, LoginFormProps> & LoginFormProps>;

type LoginFieldNames = Extract<keyof LoginProps, string>;

const LoginForm: LoginFormType = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {createField<LoginFieldNames>('email', Input, [required, maxLength30], 'Email')}
      {createField<LoginFieldNames>('password', Input, [required, maxLength30], 'Password', 'password')}
      <div>
        {createField<LoginFieldNames>('rememberMe', Input, [], '', 'checkbox')}
        remember me
      </div>
      {!!captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captcha"/>
          {createField<LoginFieldNames>('captcha', Input, [], 'Text from image')}
        </div>
      )}
      {error && <span className={classes.form__error}>{error}</span>}
      <button type="submit">Login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginProps, LoginFormProps>({ form: 'login' })(LoginForm);

const Login: React.FC<Props> = ({ isAuth, login, captchaUrl }) => {

  const history      = useHistory();
  const handleSubmit = (formData: LoginProps) => {
    login(formData);
  };

  if (isAuth) {
    history.push('/profile');
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={handleSubmit} captchaUrl={captchaUrl}/>
    </div>
  );
};

export default Login;
