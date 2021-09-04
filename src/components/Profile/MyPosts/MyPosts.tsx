import React, { FormEventHandler } from 'react';
import Post from './Post/Post';
import { Field, FormSubmitProp, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLength30, required } from '../../../utils/validators';
import { InitialState } from '../../../redux/profile/reducer';

interface Props {
  addPost: any;
  postsData: InitialState['postsData'];
}

const MyPostsForm: React.FC<any> = ( { onSubmit } ) => {
  return (
    <form onSubmit={ onSubmit }>
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

const MyPosts: React.FC<Props> = React.memo( ( { addPost, postsData } ) => {

  const postsElements = postsData.map( ( {id, message} ) => <Post key={ id } message={ message }/> );
  const handleAddPost = ( formData: any ) => {
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
} );

export default MyPosts;
