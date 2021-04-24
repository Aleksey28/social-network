import { addPost, setValueNewPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const methods = {
  addPost,
  setValueNewPost,
}

const MyPostsContainer = connect(mapStateToProps, methods)(MyPosts);

export default MyPostsContainer;
