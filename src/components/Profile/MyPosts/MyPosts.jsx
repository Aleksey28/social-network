import React from "react";
import Post from "./Post/Post";

const MyPosts = ({ profilePage, dispatch }) => {

  const postsElements = profilePage.postsData.map((item) => <Post key={item.id} message={item.message}/>);

  const handleClickOnButton = () => {
    const action = {
      type: "ADD-POST",
    };
    dispatch(action);
  };

  const handleChangeNewPost = (e) => {
    const action = {
      type: "SET-VALUE-NEW-POST",
      value: e.currentTarget.value,
    };
    dispatch(action);
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
