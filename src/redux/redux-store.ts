import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import profileReducer from './profile/reducer';
import dialogsReducer from './dialogs/reducer';
import friendsReducer from './friends/reducer';
import usersReducer from './users/reducer';
import authReducer from './auth/reducer';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import appReducer from './app/reducer';

export type Reducers = typeof reducers;
export type AppStateType = ReturnType<Reducers>;

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friends:     friendsReducer,
  usersPage:   usersReducer,
  auth:        authReducer,
  form:        formReducer,
  app:         appReducer,
});

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// @ts-ignore
window.__store__ = store;

export default store;
