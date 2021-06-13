import { addPost } from '../../../redux/profile/reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getProfilePageState } from '../../../redux/profile/selector';

const mapStateToProps = ( state ) => {
  return {
    profilePage: getProfilePageState( state ),
  };
};

const methods = {
  addPost,
};

const MyPostsContainer = connect( mapStateToProps, methods )( MyPosts );

export default MyPostsContainer;
