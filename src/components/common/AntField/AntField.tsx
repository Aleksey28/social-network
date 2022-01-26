import { Checkbox, Form, Input } from 'antd';
import React from 'react';
import { FieldProps } from 'formik';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

const { TextArea } = Input;

type AntComponentsType = typeof TextArea | typeof Input | typeof Checkbox;
type PropsType = FieldProps & { submitCount: number, hasFeedback: boolean }

const AntFieldCreator = (AntComponent: AntComponentsType) => ({
                                                                form,
                                                                field,
                                                                submitCount,
                                                                hasFeedback,
                                                                ...props
                                                              }: PropsType) => {

  const touched        = form.touched[field.name];
  const submitted      = submitCount > 0;
  const hasError       = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError   = hasError && touched;
  const handleBlur     = () => form.setFieldTouched(field.name, true);
  const handleChange   = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | CheckboxChangeEvent) => form.setFieldValue(field.name, e.target.value);

  return (
    <Form.Item
      hasFeedback={!!(hasFeedback && (submitted || touched))}
      help={submittedError || touchedError ? hasError : false}
      validateStatus={submittedError || touchedError ? 'error' : 'success'}
      {...props}
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

export const AntTextArea = AntFieldCreator(TextArea);
export const AntInput    = AntFieldCreator(Input);
export const AntCheckbox = AntFieldCreator(Checkbox);
