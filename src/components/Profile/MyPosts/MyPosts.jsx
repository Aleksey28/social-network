import React from 'react';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../../utils/validators';

const MyPostsForm = ( { handleSubmit } ) => {
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

const MyPosts = ( { addPost, profilePage } ) => {

  const postsElements = profilePage.postsData.map( ( item ) => <Post key={ item.id } message={ item.message }/> );
  const handleAddPost = ( formData ) => {
    addPost( formData );
  };

  return (
    <div>
      My posts
      <MyPostsReduxForm onSubmit={ handleAddPost }/>
      <div>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
