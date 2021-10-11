import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import React from 'react';

interface FieldsType {
  term: string;
}

const validation = (values: FieldsType) => {
  const errors: FormikErrors<FieldsType> = {};

  if (!values.term) {
    errors.term = 'Required';
  }
  else if (values.term.length < 2) {
    errors.term = 'Min length - 2';
  }

  return errors;
};

const SearchUsersForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ term: '' }}
      validate={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="input" name="term"/>
          <ErrorMessage name="term" component="span"/>
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchUsersForm;
