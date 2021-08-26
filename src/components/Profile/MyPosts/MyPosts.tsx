import React, { FormEventHandler } from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../../utils/validators';
import { InitialState } from '../../../redux/profile/reducer';

interface MyPostsFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

interface MyPostsProps {
  addPost: any;
  postsData: InitialState['postsData'];
}

interface FormData {
  newPost: string;
}

const MyPostsForm = ( { handleSubmit }: MyPostsFormProps ): JSX.Element => {
  return (
    <form onSubmit={ handleSubmit }>
      <Field name="newPost"
             placeholder="New post"
             component={ Textarea }
             validate={ [required, maxLength30] }/>
      <button type="submit">Add post</button>
    </form>
  );
};

const MyPostsReduxForm = reduxForm( {
  form: 'newPost',
} )( MyPostsForm );

const MyPosts = React.memo( ( { addPost, postsData }: MyPostsProps ): JSX.Element => {

  const postsElements = postsData.map( ( {id, message} ) => <Post key={ id } message={ message }/> );
  const handleAddPost = ( formData: FormData ) => {
    addPost( formData );
  };

  return (
    <div>
      My posts
      {/*@ts-ignore*/}
      <MyPostsReduxForm onSubmit={ handleAddPost }/>
      <div>
        { postsElements }
      </div>
    </div>
  );
} );

export default MyPosts;
