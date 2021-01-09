import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const rerenderEntireTree = (state, addPost, setValueNewPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App addPost = {addPost} setValueNewPost={setValueNewPost} {...state}/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
  );
}

export default rerenderEntireTree;
