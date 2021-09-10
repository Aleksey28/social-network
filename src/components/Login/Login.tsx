import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import React from 'react';
import { Input } from '../common/FormsControls/FormsControls';
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

const LoginForm: LoginFormType = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Field name="email" placeholder="Email" component={Input} validate={[required, maxLength30]}/>
      <Field name="password"
             placeholder="Password"
             component={Input}
             validate={[required, maxLength30]}
             type="password"/>
      <div>
        <Field name="rememberMe" component={Input} type="checkbox"/>remember me
      </div>
      {!!captchaUrl && (
        <div>
          <img src={captchaUrl} alt="captcha"/>
          <Field name="captcha" placeholder="Text from image" component={Input}/>
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
