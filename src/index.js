import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import state, { addPost, setValueNewPost, subscribe } from "./redux/state";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App addPost={addPost} setValueNewPost={setValueNewPost} {...state}/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
