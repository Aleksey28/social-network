import classes from './FormsControls.module.css';
import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { InputType } from 'zlib';
import { Validator } from 'redux-form/lib/Field';

const FromControl: React.FC<WrappedFieldProps> = ({ meta: { valid, touched, error }, children }) => {
  const hasError = !valid && touched;
  return (
    <div className={classes.control}>
      {children}
      {hasError && <span className={classes.control__message}>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...rest } = props;

  return (
    <FromControl {...props}><textarea {...input} {...rest}/></FromControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...rest } = props;

  return (
    <FromControl {...props}><input {...input} {...rest}/></FromControl>
  );
};

export function createField<FieldNames extends string> (name: FieldNames, component: React.FC<WrappedFieldProps>, validate: Array<Validator> = [], placeholder: string = '', type: InputType = '') {
  return <Field name={name}
                placeholder={placeholder}
                component={component}
                validate={validate}
                type={type}/>;
}
