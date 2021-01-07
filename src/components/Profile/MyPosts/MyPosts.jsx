import React from "react";
import Post from "./Post/Post";

const MyPosts = ({ profilePage }) => {

  return (
    <div>
      My posts
      <div>
        <textarea placeholder={"New post"}/>
        <button>Add post</button>
      </div>
      <div>
        {profilePage.postsData.map((item) => <Post key={item.id} message={item.message}/>)}
      </div>
    </div>
  );
};

export default MyPosts;
