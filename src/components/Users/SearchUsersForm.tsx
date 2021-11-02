import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import React from 'react';
import { UserFiltersType } from '../../redux/users/reducer';
import { FilterFriend } from '../../utils/enums';

interface PropsType {
  filters: UserFiltersType;
  onSearch: (filters: UserFiltersType) => void;
}

interface FieldsType {
  term: string;
  friend: FilterFriend;
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
          <Field as="select" name="friend" disabled={isSubmitting}>
            <option value={FilterFriend.AllUsers}>All users</option>
            <option value={FilterFriend.Followed}>Followed</option>
            <option value={FilterFriend.Unfollowed}>Unfollowed</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchUsersForm;
