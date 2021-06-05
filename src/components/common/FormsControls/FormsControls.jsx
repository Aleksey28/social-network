const FromControl = ( { Component, input, meta, ...props } ) => {
  return (
    <div>
      <Component { ...input } { ...props }/>
      <span>Error</span>
    </div>
  );
};
