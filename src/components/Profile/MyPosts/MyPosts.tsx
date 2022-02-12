import React from 'react';
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsData } from '../../../redux/profile/selector';
import { actions } from '../../../redux/profile/reducer';
import { Field, Formik } from 'formik';
import { Button, Form } from 'antd';
import { AntTextArea } from '../../common/AntField/AntField';
import classes from './MyPosts.module.css';

interface FieldsType {
  newPost: string;
}

interface FormPropsType {
  handleSubmit: (newPost: string) => void;
  initialValues?: FieldsType;
}

const isRequired = (value: string) => !value ? 'Required!' : '';

const MyPostsForm: React.FC<FormPropsType> = ({ handleSubmit, initialValues = { newPost: '' } }) => {

  return (
    <Formik
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit(values.newPost);
        setSubmitting(false);
      }}
      initialValues={initialValues}
    >
      {({ isSubmitting, submitForm }) => (
        <Form onFinish={submitForm} className={classes.form}>
          <Field
            component={AntTextArea}
            name="newPost"
            type="input"
            as="textarea"
            validate={isRequired}
            placeholder="Write new post..."
            hasFeedback
            showCount
            allowClear
          />
          <Button type="primary" htmlType="submit" disabled={isSubmitting}
                  className={classes.form__submit}>Post</Button>
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
    <div className={classes.posts}>
      <MyPostsForm handleSubmit={handleAddPost}/>
      <div>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;
