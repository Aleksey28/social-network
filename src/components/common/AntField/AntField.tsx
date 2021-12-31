import { Form, Input } from 'antd';
import React from 'react';
import { FieldProps } from 'formik';

const { TextArea } = Input;

type AntComponentsType = typeof TextArea | typeof Input;
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
  const handleChange   = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => form.setFieldValue(field.name, e.target.value);

  return (
    <Form.Item
      hasFeedback={!!(hasFeedback && (submitted || touched))}
      help={submittedError || touchedError ? hasError : false}
      validateStatus={submittedError || touchedError ? 'error' : 'success'}
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