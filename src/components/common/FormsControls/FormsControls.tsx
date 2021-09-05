import classes from './FormsControls.module.css';
import React from 'react';

interface Props {
  Component: string;
  input: any;
  meta: {
    valid: boolean;
    touched: boolean;
    error: Error;
  };
}

const FromControl: React.FC<Props> = ({ Component, input, meta: { valid, touched, error }, ...props }) => {
  const hasError = !valid && touched;
  return (
    <div className={classes.control}>
      <Component className={hasError ? classes.control__component : undefined} {...input} {...props}/>
      {hasError && <span className={classes.control__message}>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<any> = (props) => {
  return (
    <FromControl Component="textarea" {...props}/>
  );
};

export const Input: React.FC<any> = (props) => {
  return (
    <FromControl Component="input" {...props}/>
  );
};

