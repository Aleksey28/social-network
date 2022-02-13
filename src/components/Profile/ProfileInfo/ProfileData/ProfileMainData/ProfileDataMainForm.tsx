import React from 'react';
import { ProfileType } from '../../../../../types';
import { Field, FieldArray, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import { Button, Form, Select, Space, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { required } from '../../../../../utils/validators';
import { AntCheckbox, AntInput, AntSelect } from '../../../../common/AntField/AntField';
import classes from './ProfileDataMain.module.css';

const { Title }  = Typography;
const { Option } = Select;

interface PropsType {
  onSubmit: (formData: ProfileType) => void;
  initialValues: ProfileType;
  onCancel: () => void;
}

interface Contact {
  key: string;
  value: any;
}

type SubmitValuesType = ProfileType & { contacts: Contact[] };

const ProfileDataMainForm: React.FC<PropsType> = ({ onSubmit, onCancel, initialValues }) => {
  const contactsNames = initialValues.contacts && Object.keys(initialValues.contacts) || [];
  const contacts      = initialValues.contacts &&
                        Object.entries(initialValues.contacts)
                          .map(([key, value]) => ({ key, value }))
                          .filter(({ value }) => !!value) || [];

  const handleSubmit = async (values: SubmitValuesType, { setSubmitting }: FormikHelpers<SubmitValuesType>) => {
    const contacts = Object.assign(
      {},
      initialValues.contacts,
      Object.fromEntries(values.contacts.map(({ key, value }) => [key, value]))
    );

    await onSubmit({ ...values, contacts });
    setSubmitting(false);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={Object.assign({}, initialValues, { contacts })}>
      {({ isSubmitting, submitForm, values }) => (
        <Form onFinish={submitForm} size="small">
          <div className={classes.title}>
            <Title level={5}>Info</Title>
          </div>
          <Field component={AntInput} name="fullName" validate={required} label="Name" allowClear hasFeedback/>
          <Field component={AntInput} name="aboutMe" validate={required} label="About me" allowClear hasFeedback/>
          <Field component={AntCheckbox} type="checkbox" name="lookingForAJob" label="Looking for a job"/>
          <Field component={AntInput} name="lookingForAJobDescription" validate={required} label="Skills" allowClear
                 hasFeedback/>
          Contacts:
          <FieldArray name="contacts" render={({ remove, push }) => (
            <>
              {values.contacts.map((_, index) => (
                <Space key={`contacts.${index}`} align="baseline">
                  <Field component={AntSelect} as="select" name={`contacts.${index}.key`} validate={required}
                         className={classes.select}>
                    {contactsNames
                      .filter(name => !values.contacts.some(({ key }) => key === name))
                      .map((name: string) => (
                        <Option key={name} value={name}>
                          {name}
                        </Option>
                      ))}
                  </Field>
                  <Field component={AntInput} name={`contacts.${index}.value`} allowClear/>
                  <MinusCircleOutlined onClick={() => remove(index)}/>
                </Space>
              ))}

              {values.contacts.length < contactsNames.length &&
               <Form.Item>
                 <Button type="dashed" onClick={() => push('')} block icon={<PlusOutlined/>}>Add contact</Button>
               </Form.Item>
              }
            </>
          )}/>

          <Form.Item>
            <Button className={classes.button} type="primary" htmlType="submit" disabled={isSubmitting}>Save</Button>
            <Button className={classes.button} disabled={isSubmitting} onClick={onCancel}>Cancel</Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataMainForm;
