import React from "react";
import Post from "./Post/Post";

const MyPosts = ({ profilePage }) => {

  const postsElements = profilePage.postsData.map((item) => <Post key={item.id} message={item.message}/>);

  return (
    <div>
      My posts
      <div>
        <textarea placeholder={"New post"}/>
        <button>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
