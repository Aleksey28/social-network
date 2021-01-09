import React from "react";
import reportWebVitals from "./reportWebVitals";
import state, { addPost, setValueNewPost } from "./redux/state";
import rerenderEntireTree from "./render";

rerenderEntireTree(state, addPost, setValueNewPost);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
