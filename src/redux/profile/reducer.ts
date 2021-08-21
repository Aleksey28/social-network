import profileAPI from "../../api/profileAPI";
import { stopSubmit } from "redux-form";

type InitialState = typeof initialState;

type Action = AddPost | RemovePost | SetUserInfo | SetUserStatus | SetUserPhotos;

interface UserInfo {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small: string;
    large: string
  };
}

interface Post {
  id: number;
  message: string;
}

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
  userInfo: UserInfo;
}

interface SetUserStatus {
  type: typeof SET_USER_STATUS;
  userStatus: string;
}

interface SetUserPhotos {
  type: typeof SET_USER_PHOTOS;
  userPhotos: string;
}

const ADD_POST = "social-network/reducer/ADD_POST";
const REMOVE_POST = "social-network/reducer/REMOVE_POST";
const SET_USER_INFO = "social-network/reducer/SET_USER_INFO";
const SET_USER_STATUS = "social-network/reducer/SET_USER_STATUS";
const SET_USER_PHOTOS = "social-network/reducer/SET_USER_PHOTOS";

const initialState = {
  postsData: [
    {
      id: 1,
      message: "How are you?",
    },
    {
      id: 2,
      message: "It is my first post",
    },
  ] as Array<Post>,
  userInfo: null as Partial<UserInfo> | null,
  userStatus: "no status" as string,
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
          photos: {
            large: action.userPhotos, small: action.userPhotos,
          },
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

const setUserInfo = (userInfo: UserInfo): SetUserInfo => ({
  type: SET_USER_INFO,
  userInfo,
});

const setUserStatus = (userStatus: string): SetUserStatus => ({
  type: SET_USER_STATUS,
  userStatus,
});

const setUserPhotos = (userPhotos: string): SetUserPhotos => ({
  type: SET_USER_PHOTOS,
  userPhotos,
});

export const getUserInfo = (userId: number) => async (dispatch: any): Promise<void> => {
  try {
    const data = await profileAPI.getProfileData(userId);

    dispatch(setUserInfo(data));
  } catch (error) {
    console.log(error);
  }
};

export const getUserStatus = (userId: number) => async (dispatch: any): Promise<void> => {
  try {
    const data = await profileAPI.getStatus(userId);

    dispatch(setUserStatus(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateUserStatus = (status: string) => async (dispatch: any): Promise<void> => {
  try {
    const { data } = await profileAPI.setStatus(status);

    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserPhoto = (image: string) => async (dispatch: any): Promise<void> => {
  try {
    const { data } = await profileAPI.setPhoto(image);

    if (data.resultCode === 0) {
      dispatch(setUserPhotos(data.data.photos));
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateUserData = (userData: UserInfo) => async (dispatch: any): Promise<void> => {
  try {
    const { data } = await profileAPI.setProfileData(userData);

    if (data.resultCode === 0) {
      const data = await profileAPI.getProfileData(userData.userId);
      dispatch(setUserInfo(data));
    } else {
      const errors = data.messages.reduce((errors: ErrorsObject, item: string) => {
        const [message, element] = item.split("(");
        const elementRoute = element.slice(0, element.length - 1).split("->");

        elementRoute.reduce((res: ErrorsObject | string, item, index, arr) => {
          if (typeof res === "string") {
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

      dispatch(stopSubmit("profileData", errors));
    }
  } catch (error) {
    console.log(error);
  }
};

export default reducer;
