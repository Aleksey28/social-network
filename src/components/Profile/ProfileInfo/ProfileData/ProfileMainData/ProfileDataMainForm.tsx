import React from 'react';
import { ProfileType } from '../../../../../types';
import { Field, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import { Button, Form } from 'antd';
import { required } from '../../../../../utils/validators';
import { AntCheckbox, AntInput } from '../../../../common/AntField/AntField';
import classes from './ProfileDataMain.module.css';

interface PropsType {
  onSubmit: (profileInfo: Partial<ProfileType>) => void;
  initialValues: Partial<ProfileType>;
  onCancel: () => void;
}

const ProfileDataMainForm: React.FC<PropsType> = ({ onSubmit, onCancel, initialValues }) => {

  const handleSubmit = async (values: Partial<ProfileType>, { setSubmitting }: FormikHelpers<Partial<ProfileType>>) => {
    await onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ isSubmitting, submitForm }) => (
        <Form onFinish={submitForm} size="small">
          <Field component={AntInput} name="fullName" validate={required} label="Name" allowClear hasFeedback/>
          <Field component={AntInput} name="aboutMe" validate={required} label="About me" allowClear hasFeedback/>
          <Field component={AntCheckbox} type="checkbox" name="lookingForAJob" label="Looking for a job"/>
          <Field component={AntInput} name="lookingForAJobDescription" validate={required} label="Skills" allowClear
                 hasFeedback/>
          <Button className={classes.button} type="primary" htmlType="submit" disabled={isSubmitting}>Save</Button>
          <Button className={classes.button} disabled={isSubmitting} onClick={onCancel}>Cancel</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileDataMainForm;
