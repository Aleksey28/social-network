const required = (value: any): string | void => value
                                                ? undefined
                                                : 'Required field';

const maxLength = (max: number) => (value: string): string | void => value && value.length > max
                                                                     ? `Max length is ${max}`
                                                                     : undefined;

const maxLength30 = maxLength(30);

export {
  required,
  maxLength,
  maxLength30,
};
