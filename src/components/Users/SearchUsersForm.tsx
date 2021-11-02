import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import React from 'react';
import { UserFiltersType } from '../../redux/users/reducer';

interface PropsType {
  filters: UserFiltersType;
  onSearch: (filters: UserFiltersType) => void;
}

interface FieldsType {
  term: string;
  friend: boolean;
}

const validation = (values: FieldsType) => {
  const errors: FormikErrors<FieldsType> = {};

  if (values.term && values.term.length < 2) {
    errors.term = 'Min length - 2';
  }

  return errors;
};

const SearchUsersForm: React.FC<PropsType> = ({ onSearch, filters }) => {
  return (
    <Formik
      initialValues={filters}
      validate={validation}
      onSubmit={async (values, { setSubmitting }) => {
        await onSearch(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, submitForm }) => (
        <Form>
          <Field type="input" name="term"/>
          <ErrorMessage name="term" component="span"/>
          <Field type="checkbox" name="friend" onClick={submitForm} disabled={isSubmitting}/>
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchUsersForm;
