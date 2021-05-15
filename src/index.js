import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import AppContainer from './components/App/AppContainer';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={ store }>
        <AppContainer/>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById( 'root' ),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
