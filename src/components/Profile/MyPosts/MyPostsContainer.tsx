import { actions } from '../../../redux/profile/reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { getPostsData } from '../../../redux/profile/selector';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../types';

interface StateProps {
  postsData: PostType[],
}

interface DispatchProps {
  addPost: (newPost: string) => any
}

interface OwnProps {

}

const mapStateToProps = (state: AppStateType): StateProps => {
  return {
    postsData: getPostsData(state),
  };
};

const methods: DispatchProps = {
  addPost: actions.addPost,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, methods);

const MyPostsContainer = connector(MyPosts);

export default MyPostsContainer;
