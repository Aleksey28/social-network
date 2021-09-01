import { addPost } from '../../../redux/profile/reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getPostsData } from '../../../redux/profile/selector';
import { AppStateType } from '../../../redux/redux-store';
import { Post } from '../../../types';

interface StateProps {
  postsData: Post[],
}

interface DispatchProps {
  addPost: (newPost: string) => void
}

interface OwnProps {

}

const mapStateToProps = (state: AppStateType): StateProps => {
  return {
    postsData: getPostsData(state),
  };
};

const methods: DispatchProps = {
  addPost,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, methods);

const MyPostsContainer = connector(MyPosts);

export default MyPostsContainer;
