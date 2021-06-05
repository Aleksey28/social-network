const FromControl = ( { Component, input, meta, ...props } ) => {
  return (
    <div>
      <Component { ...input } { ...props }/>
      { !meta.valid && meta.touched && <span>{ meta.error }</span> }
    </div>
  );
};

export const Textarea = ( props ) => {
  return (
    <FromControl Component="textarea" { ...props }/>
  );
};
