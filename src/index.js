import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import store from "./redux/redux-store";

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App dispatch={store.dispatch.bind(store)} {...state}/>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
  )
  ;
};

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

rerenderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
