import React from "react";
import Post from "./Post/Post";

const MyPosts = ({ addPost, setValueNewPost, profilePage }) => {

  const postsElements = profilePage.postsData.map((item) => <Post key={item.id} message={item.message}/>);

  const handleClickOnButton = () => {
    addPost();
  };

  const handleChangeNewPost = (e) => {
    setValueNewPost(e.currentTarget.value);
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
