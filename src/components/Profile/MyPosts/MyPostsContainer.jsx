import React, { useContext } from "react";
import { addPostActionCreator, setValueNewPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

  const {store} = useContext(StoreContext);

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
