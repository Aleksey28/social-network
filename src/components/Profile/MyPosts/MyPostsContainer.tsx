import { addPost } from '../../../redux/profile/reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getPostsData } from '../../../redux/profile/selector';

const mapStateToProps = ( state: any ) => {
  return {
    postsData: getPostsData( state ),
  };
};

const methods = {
  addPost,
};

const MyPostsContainer = connect( mapStateToProps, methods )( MyPosts );

export default MyPostsContainer;
