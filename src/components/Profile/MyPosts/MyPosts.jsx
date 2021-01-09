import React, { useRef } from "react";
import Post from "./Post/Post";

const MyPosts = ({ profilePage, addPost }) => {

  const newPostElement = useRef();

  const postsElements = profilePage.postsData.map((item) => <Post key={item.id} message={item.message}/>);

  const handleClickOnButton = () => {
    addPost(newPostElement.current.value);
    newPostElement.current.value = "";
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement} placeholder={"New post"}/>
        <button onClick={handleClickOnButton}>Add post</button>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
