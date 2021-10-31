import { InjectedFormProps, reduxForm } from 'redux-form';
import React from 'react';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../utils/validators';
import { useHistory } from 'react-router';
import classes from './LoginPage.module.css';
import { LoginPropsType } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { getCaptchaUrlState, getIsAuthState } from '../../redux/auth/selector';
import { login } from '../../redux/auth/reducer';

interface LoginFormProps {
  captchaUrl: string;
}

type LoginFormType = React.FC<InjectedFormProps<LoginPropsType, LoginFormProps> & LoginFormProps>;

type LoginFieldNames = Extract<keyof LoginPropsType, string>;

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

const LoginReduxForm = reduxForm<LoginPropsType, LoginFormProps>({ form: 'login' })(LoginForm);

const LoginPage: React.FC = () => {

  const history  = useHistory();
  const dispatch = useDispatch();

  const isAuth     = useSelector(getIsAuthState);
  const captchaUrl = useSelector(getCaptchaUrlState);

  const handleSubmit = (formData: LoginPropsType) => {
    dispatch(login(formData));
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

export default LoginPage;
