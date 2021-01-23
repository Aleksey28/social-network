import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext";

const rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <StoreContext.Provider value={store}>
          <App/>
        </StoreContext.Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
  )
  ;
};

store.subscribe(() => {
  rerenderEntireTree();
});

rerenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
