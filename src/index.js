import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import store from "./redux/state";


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App addPost={store.addPost.bind(store)} setValueNewPost={store.setValueNewPost.bind(store)} {...state}/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
