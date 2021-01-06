import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const postsData = [
    {
      id: 1,
      message: "How are you?",
    },
    {
      id: 2,
      message: "It is my first post",
    }
  ]

  return (
    <div>
      My posts
      <div>
        <textarea placeholder={"New post"}/>
        <button>Add post</button>
      </div>
      <div>
        {postsData.map((item) => <Post key={item.id} message={item.message}/>)}
      </div>
    </div>
  );
};

export default MyPosts;
