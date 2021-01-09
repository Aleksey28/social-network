import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const rerenderEntireTree = (state, addPost) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App addPost = {addPost} {...state}/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
  );
}

export default rerenderEntireTree;
