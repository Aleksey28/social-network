import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profile/reducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './users/reducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

const reducers = combineReducers( {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
} );

const store = createStore( reducers, applyMiddleware( thunkMiddleware ) );

export default store;
