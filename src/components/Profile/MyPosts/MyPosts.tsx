import React from 'react';
import Post from './Post/Post';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../../utils/validators';
import { PostType as PostType } from '../../../types';

interface Props {
  addPost: (newPost: string) => void;
  postsData: PostType[];
}

interface FormProps {
  newPost: string;
}

type FormNames = Extract<keyof FormProps, string>;
type FormType = React.FC<InjectedFormProps<FormProps>>

const MyPostsForm: FormType = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<FormNames>('newPost', Textarea, [required, maxLength30], 'New post')}
      <button type="submit">Add post</button>
    </form>
  );
};

const MyPostsReduxForm = reduxForm<FormProps>({
  form: 'newPost',
})(MyPostsForm);

const MyPosts: React.FC<Props> = React.memo(({ addPost, postsData }) => {

  const postsElements = postsData.map(({ id, message }) => <Post key={id} message={message}/>);
  const handleAddPost = ({ newPost }: FormProps) => {
    addPost(newPost);
  };

  return (
    <div>
      My posts
      <MyPostsReduxForm onSubmit={handleAddPost}/>
      <div>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;
