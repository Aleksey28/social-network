import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
