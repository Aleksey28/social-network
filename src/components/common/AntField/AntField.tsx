import { Checkbox, Form, Input, Select } from 'antd';
import React from 'react';
import { FieldProps } from 'formik';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const { TextArea } = Input;

type AntComponentsType = typeof TextArea | typeof Input | typeof Select;
type PropsType = FieldProps & { submitCount: number, hasFeedback: boolean, label?: string }

const getPropertyByRoute = (obj: any, route: string[], routePart = 0): any => {
  if (typeof obj !== 'object') {
    return obj;
  }

  return getPropertyByRoute(obj[route[routePart]], route, routePart + 1);
};

const AntFieldCreator = (AntComponent: AntComponentsType) => ({
                                                                form,
                                                                field,
                                                                submitCount,
                                                                hasFeedback,
                                                                label,
                                                                ...props
                                                              }: PropsType) => {

  const nameRoute      = field.name.split('.');
  const touched        = getPropertyByRoute(form.touched, nameRoute);
  const submitted      = submitCount > 0;
  const hasError       = getPropertyByRoute(form.errors, nameRoute);
  const submittedError = hasError && submitted;
  const touchedError   = hasError && touched;
  const handleBlur     = () => form.setFieldTouched(field.name, true);
  const handleChange   = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => {
    form.setFieldValue(field.name, typeof e === 'string' ? e : e.target.value);
  };

  return (
    <Form.Item
      hasFeedback={!!(hasFeedback && (submitted || touched))}
      help={submittedError || touchedError ? hasError : false}
      validateStatus={submittedError || touchedError ? 'error' : 'success'}
      label={label}
    >
      <AntComponent
        {...field}
        {...props}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </Form.Item>
  );
};

const AntCheckboxFieldCreator = () => ({ form, field, ...props }: PropsType) => {
  const handleChange = (e: CheckboxChangeEvent) => form.setFieldValue(field.name, e.target.checked);

  return (
    <Form.Item {...props}>
      <Checkbox {...field} {...props} onChange={handleChange}/>
    </Form.Item>
  );
};

export const AntTextArea = AntFieldCreator(TextArea);
export const AntInput    = AntFieldCreator(Input);
export const AntCheckbox = AntCheckboxFieldCreator();
export const AntSelect   = AntFieldCreator(Select);
