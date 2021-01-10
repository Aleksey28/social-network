import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator, setValueNewPostActionCreator } from "../../../redux/profileReducer";

const MyPosts = ({ profilePage, dispatch }) => {

  const postsElements = profilePage.postsData.map((item) => <Post key={item.id} message={item.message}/>);

  const handleClickOnButton = () => {
    dispatch(addPostActionCreator());
  };

  const handleChangeNewPost = (e) => {
    dispatch(setValueNewPostActionCreator(e.currentTarget.value));
  };

  return (
    <div>
      My posts
      <div>
        <textarea value={profilePage.valueNewPost} placeholder={"New post"} onChange={handleChangeNewPost}/>
        <button onClick={handleClickOnButton}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
