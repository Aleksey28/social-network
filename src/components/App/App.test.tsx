import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/redux-store';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const TestApp = <HashRouter>
  <Provider store={ store }>
    <App/>
  </Provider>
</HashRouter>;

it( 'should render without crashing', function() {
  const div = document.createElement( 'div' );
  ReactDOM.render( TestApp, div );
  ReactDOM.unmountComponentAtNode( div );
} );
