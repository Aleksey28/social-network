import classes from './FormsControls.module.css';

interface FromControl {
  Component: string;
  input: any;
  meta: {
    valid: boolean;
    touched: boolean;
    error: Error;
  };
}

const FromControl = ( { Component, input, meta: { valid, touched, error }, ...props }: FromControl ): JSX.Element => {
  const hasError = !valid && touched;
  return (
    <div className={ classes.control }>
      <Component className={ hasError ? classes.control__component : undefined } { ...input } { ...props }/>
      { hasError && <span className={ classes.control__message }>{ error }</span> }
    </div>
  );
};

export const Textarea = ( props: any ): JSX.Element => {
  return (
    <FromControl Component="textarea" { ...props }/>
  );
};

export const Input = ( props: any ): JSX.Element => {
  return (
    <FromControl Component="input" { ...props }/>
  );
};

