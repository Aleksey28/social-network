import profileAPI from '../../api/profileAPI';
import { FormAction, stopSubmit } from 'redux-form';
import { Photos, Post, Profile } from '../../types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../redux-store';
import { ResultCode } from '../../api/api';

export type InitialState = typeof initialState;

type Action = AddPost | RemovePost | SetUserInfo | SetUserStatus | SetUserPhotos;
type Thunk = ThunkAction<Promise<void>, AppStateType, any, Action | FormAction>;

interface ErrorsObject {
  [key: string]: string | ErrorsObject;
}

interface AddPost {
  type: typeof ADD_POST;
  newPost: string;
}

interface RemovePost {
  type: typeof REMOVE_POST;
  index: number;
}

interface SetUserInfo {
  type: typeof SET_USER_INFO;
  userInfo: Profile;
}

interface SetUserStatus {
  type: typeof SET_USER_STATUS;
  userStatus: string;
}

interface SetUserPhotos {
  type: typeof SET_USER_PHOTOS;
  userPhotos: Photos;
}

const ADD_POST        = 'social-network/reducer/ADD_POST';
const REMOVE_POST     = 'social-network/reducer/REMOVE_POST';
const SET_USER_INFO   = 'social-network/reducer/SET_USER_INFO';
const SET_USER_STATUS = 'social-network/reducer/SET_USER_STATUS';
const SET_USER_PHOTOS = 'social-network/reducer/SET_USER_PHOTOS';

const initialState = {
  postsData:  [
                {
                  id:      1,
                  message: 'How are you?',
                },
                {
                  id:      2,
                  message: 'It is my first post',
                },
              ] as Array<Post>,
  userInfo:   null as Partial<Profile> | null,
  userStatus: 'no status' as string,
};

const reducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [...state.postsData, { id: 5, message: action.newPost }],
      };
    }
    case REMOVE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((item, index) => action.index !== index),
      };
    }
    case SET_USER_INFO: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        userStatus: action.userStatus,
      };
    }
    case SET_USER_PHOTOS: {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          photos: action.userPhotos,
        },
      };
    }
    default:
      return state;
  }
};

export const addPost = (newPost: string): AddPost => ({
  type: ADD_POST,
  newPost,
});

export const removePost = (index: number): RemovePost => ({
  type: REMOVE_POST,
  index,
});

const setUserInfo = (userInfo: Profile): SetUserInfo => ({
  type: SET_USER_INFO,
  userInfo,
});

const setUserStatus = (userStatus: string): SetUserStatus => ({
  type: SET_USER_STATUS,
  userStatus,
});

const setUserPhotos = (userPhotos: Photos): SetUserPhotos => ({
  type: SET_USER_PHOTOS,
  userPhotos,
});

export const getUserInfo = (userId: string): Thunk => async (dispatch) => {
  try {
    const { data } = await profileAPI.getProfileData(userId);

    dispatch(setUserInfo(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const getUserStatus = (userId: string): Thunk => async (dispatch) => {
  try {
    const { data } = await profileAPI.getStatus(userId);

    dispatch(setUserStatus(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const updateUserStatus = (status: string): Thunk => async (dispatch) => {
  try {
    const { data } = await profileAPI.setStatus(status);

    if (data.resultCode === ResultCode.Success) {
      dispatch(setUserStatus(status));
    }
  }
  catch (error) {
    console.log(error);
  }
};

export const updateUserPhoto = (image: File): Thunk => async (dispatch) => {
  try {
    const { data } = await profileAPI.setPhoto(image);

    if (data.resultCode === ResultCode.Success) {
      dispatch(setUserPhotos(data.data.photos));
    }
  }
  catch (error) {
    console.log(error);
  }
};

export const updateUserData = (userData: Profile): Thunk => async (dispatch) => {
  try {
    const { data } = await profileAPI.setProfileData(userData);

    if (data.resultCode === ResultCode.Success) {
      const { data } = await profileAPI.getProfileData(userData.userId);
      dispatch(setUserInfo(data));
    }
    else {
      const errors = data.messages.reduce((errors: ErrorsObject, item: string) => {
        const [message, element] = item.split('(');
        const elementRoute       = element.slice(0, element.length - 1).split('->');

        elementRoute.reduce((res: ErrorsObject | string, item, index, arr) => {
          if (typeof res === 'string') {
            return {};
          }

          const key = item[0].toLowerCase() + item.slice(1);

          if (key in res) {
            return res[key];
          }

          res[key] = index < arr.length - 1 ? {} : message.slice(0, message.length - 1);

          return res[key];
        }, errors);

        return errors;
      }, {});

      dispatch(stopSubmit('profileData', errors));
    }
  }
  catch (error) {
    console.log(error);
  }
};

export default reducer;
