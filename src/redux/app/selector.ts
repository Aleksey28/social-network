import { AppStateType } from '../redux-store';

export const getInitializedState = (state: AppStateType) => state.app.initialized;
