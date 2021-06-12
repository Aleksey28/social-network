import classes from './FormsControls.module.css';

const FromControl = ( { Component, input, meta, ...props } ) => {
  const hasError = !meta.valid && meta.touched;
  return (
    <div className={ classes.control }>
      <Component className={ hasError ? classes.control__component : undefined } { ...input } { ...props }/>
      { hasError && <span className={ classes.control__message }>{ meta.error }</span> }
    </div>
  );
};

export const Textarea = ( props ) => {
  return (
    <FromControl Component="textarea" { ...props }/>
  );
};

export const Input = ( props ) => {
  return (
    <FromControl Component="input" { ...props }/>
  );
};

