import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import profileReducer from './profile/reducer';
import dialogsReducer from './dialogs/reducer';
import friendsReducer from './friends/reducer';
import usersReducer from './users/reducer';
import authReducer from './auth/reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app/reducer';

const reducers = combineReducers( {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
} );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducers, composeEnhancers( applyMiddleware( thunkMiddleware ) ) );

window.__store__ = store;

export default store;
