import { addPost } from '../../../redux/profile/reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
  return {
    profilePage: state.profilePage,
  };
};

const methods = {
  addPost,
};

const MyPostsContainer = connect( mapStateToProps, methods )( MyPosts );

export default MyPostsContainer;
