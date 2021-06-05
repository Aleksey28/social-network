const required = value => value
                          ? undefined
                          : 'Required field';
const maxLength = max => value => value && value.length > max
                                  ? `Max length is ${ max }`
                                  : undefined;
const maxLength30 = maxLength( 30 );

export {
  required,
  maxLength,
  maxLength30,
};
