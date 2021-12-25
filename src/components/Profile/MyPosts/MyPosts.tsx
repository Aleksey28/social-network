import React from 'react';
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsData } from '../../../redux/profile/selector';
import { actions } from '../../../redux/profile/reducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';

interface InitialValuesType {
  newPost: string;
}

interface FormPropsType {
  handleSubmit: (newPost: string) => void;
  initialValues?: InitialValuesType;
}

const MyPostsForm: React.FC<FormPropsType> = ({ handleSubmit, initialValues = { newPost: '' } }) => {

  return (
    <Formik
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values.newPost);
        setSubmitting(false);
      }}
      initialValues={initialValues}>
      {({ isSubmitting, submitForm }) => (
        <Form>
          <Field type="input" as="textarea" name="newPost"/>
          <ErrorMessage name="newPost" component="span"/>
          <button type="submit" disabled={isSubmitting}>Add post</button>
        </Form>
      )}
    </Formik>
  );
};

const MyPosts: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const postsData     = useSelector(getPostsData);
  const postsElements = postsData.map(({ id, message }) => <Post key={id} message={message}/>);
  const handleAddPost = (newPost: string) => {
    dispatch(actions.addPost(newPost));
  };

  return (
    <div>
      My posts
      <MyPostsForm handleSubmit={handleAddPost}/>
      <div>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;
