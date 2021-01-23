import React from "react";
import { addPostActionCreator, setValueNewPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {

  const profilePageState = store.getState().profilePage;

  const handleClickOnButtonAdd = () => {
    store.dispatch(addPostActionCreator());
  };

  const handleChangeNewPost = (value) => {
    store.dispatch(setValueNewPostActionCreator(value));
  };

  return <MyPosts addPost={handleClickOnButtonAdd}
                  changeNewPost={handleChangeNewPost}
                  postsData={profilePageState.postsData}
                  valueNewPost={profilePageState.valueNewPost}/>;
};

export default MyPostsContainer;
