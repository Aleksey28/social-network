import profileAPI from '../../api/profileAPI';
import { PhotosType, PostType, ProfileType } from '../../types';
import { BaseActionType, BaseThunkType } from '../redux-store';
import { ResultCode } from '../../api/api';
import SubmitProfileDataError from '../../errors/SubmitProfileDataError';

export type InitialState = typeof initialState;
type ActionsType = BaseActionType<typeof actions>;
export type ThunkType = BaseThunkType<ActionsType>

interface ErrorsObject {
  [key: string]: string | ErrorsObject;
}

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
              ] as Array<PostType>,
  userInfo:   {
                userId:                    '',
                fullName:                  '',
                aboutMe:                   '',
                lookingForAJob:            false,
                lookingForAJobDescription: '',
                photos:                    {},
                contacts:                  {}
              },
  userStatus: 'no status' as string,
  isValid:    true,
};

const reducer = (state = initialState, action: ActionsType): InitialState => {
  switch (action.type) {
    case 'social-network/profile/ADD_POST': {
      return {
        ...state,
        postsData: [...state.postsData, { id: 5, message: action.newPost }],
      };
    }
    case 'social-network/profile/REMOVE_POST': {
      return {
        ...state,
        postsData: state.postsData.filter((item, index) => action.index !== index),
      };
    }
    case 'social-network/profile/SET_USER_INFO': {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case 'social-network/profile/SET_USER_STATUS': {
      return {
        ...state,
        userStatus: action.userStatus,
      };
    }
    case 'social-network/profile/SET_USER_PHOTOS': {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          photos: action.userPhotos,
        },
      };
    }
    case 'social-network/profile/SET_VALID': {
      return {
        ...state,
        isValid: action.isValid
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addPost:       (newPost: string) => ({ type: 'social-network/profile/ADD_POST', newPost } as const),
  removePost:    (index: number) => ({ type: 'social-network/profile/REMOVE_POST', index } as const),
  setUserInfo:   (userInfo: ProfileType) => ({ type: 'social-network/profile/SET_USER_INFO', userInfo } as const),
  setUserStatus: (userStatus: string) => ({ type: 'social-network/profile/SET_USER_STATUS', userStatus } as const),
  setUserPhotos: (userPhotos: PhotosType) => ({ type: 'social-network/profile/SET_USER_PHOTOS', userPhotos } as const),
  setIsValid:    (isValid: boolean) => ({ type: 'social-network/profile/SET_VALID', isValid } as const),
};


export const getUserInfo = (userId: string): ThunkType => async (dispatch) => {
  try {
    const { data } = await profileAPI.getProfileData(userId);

    dispatch(actions.setUserInfo(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const getUserStatus = (userId: string): ThunkType => async (dispatch) => {
  try {
    const { data } = await profileAPI.getStatus(userId);

    dispatch(actions.setUserStatus(data));
  }
  catch (error) {
    console.log(error);
  }
};

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const { data } = await profileAPI.setStatus(status);

    if (data.resultCode === ResultCode.Success) {
      dispatch(actions.setUserStatus(status));
    }
  }
  catch (error) {
    console.log(error);
  }
};

export const updateUserPhoto = (image: File): ThunkType => async (dispatch) => {
  try {
    const { data } = await profileAPI.setPhoto(image);

    if (data.resultCode === ResultCode.Success) {
      dispatch(actions.setUserPhotos(data.data.photos));
    }
  }
  catch (error) {
    console.log(error);
  }
};

export const updateUserData = (userData: ProfileType): ThunkType => async (dispatch) => {
  const { data } = await profileAPI.setProfileData(userData);
  
  if (data.resultCode === ResultCode.Success) {
    const { data } = await profileAPI.getProfileData(userData.userId);
    dispatch(actions.setIsValid(true));
    dispatch(actions.setUserInfo(data));
  }
  else {
    const errors = data.messages.reduce((errors: ErrorsObject, item: string) => {
        dispatch(actions.setIsValid(false));
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

    throw new SubmitProfileDataError(errors);
  }
};

export default reducer;
