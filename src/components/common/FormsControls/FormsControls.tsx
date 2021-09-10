import classes from './FormsControls.module.css';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

interface Props {
  Component: any;
}

const FromControl: React.FC<WrappedFieldProps & Props> = ({
                                                            Component,
                                                            input,
                                                            meta: { valid, touched, error },
                                                            ...   props
                                                          }) => {
  const hasError = !valid && touched;
  return (
    <div className={classes.control}>
      <Component className={hasError ? classes.control__component : undefined} {...input} {...props}/>
      {hasError && <span className={classes.control__message}>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  return (
    <FromControl Component="textarea" {...props}/>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  return (
    <FromControl Component="input" {...props}/>
  );
};

