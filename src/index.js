import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const dialogsData = [
  {
    id: 1,
    name: "Pety",
  },
  {
    id: 2,
    name: "Vany",
  },
  {
    id: 3,
    name: "Sasha",
  },
];

const messagesData = [
  {
    id: 1,
    message: "Hello",
  },
  {
    id: 2,
    message: "How are you",
  },
  {
    id: 3,
    message: "Buy",
  },
];

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

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
