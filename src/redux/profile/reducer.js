import profileAPI from '../../api/profileAPI';

const ADD_POST = 'social-network/reducer/ADD_POST';
const REMOVE_POST = 'social-network/reducer/REMOVE_POST';
const SET_USER_INFO = 'social-network/reducer/SET_USER_INFO';
const SET_USER_STATUS = 'social-network/reducer/SET_USER_STATUS';
const SET_USER_PHOTOS = 'social-network/reducer/SET_USER_PHOTOS';

const initialState = {
  postsData: [
    {
      id: 1,
      message: 'How are you?',
    },
    {
      id: 2,
      message: 'It is my first post',
    },
  ],
  userInfo: null,
  userStatus: 'no status',
};

const reducer = ( state = initialState, action ) => {
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
        postsData: state.postsData.filter( ( item, index ) => action.index !== index ),
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
        userInfo: { ...state.userInfo, photos: action.userPhotos },
      };
    }
    default:
      return state;
  }
};

const addPost = ( { newPost } ) => ({
  type: ADD_POST,
  newPost,
});

const removePost = ( index ) => ({
  type: REMOVE_POST,
  index,
});

const setUserInfo = ( userInfo ) => ({
  type: SET_USER_INFO,
  userInfo,
});

const setUserStatus = ( userStatus ) => ({
  type: SET_USER_STATUS,
  userStatus,
});

const setUserPhotos = ( userPhotos ) => ({
  type: SET_USER_PHOTOS,
  userPhotos,
});

const getUserInfo = ( userId ) => async ( dispatch ) => {
  try {
    const data = await profileAPI.getProfileData( userId );

    dispatch( setUserInfo( data ) );
  } catch (error) {
    console.log( error );
  }
};

const getUserStatus = ( userId ) => async ( dispatch ) => {
  try {
    const data = await profileAPI.getStatus( userId );

    dispatch( setUserStatus( data ) );
  } catch (error) {
    console.log( error );
  }
};

const updateUserStatus = ( status ) => async ( dispatch ) => {
  try {
    const { data } = await profileAPI.setStatus( status );

    if ( data.resultCode === 0 )
      dispatch( setUserStatus( status ) );
  } catch (error) {
    console.log( error );
  }
};

const updateUserPhoto = ( image ) => async ( dispatch ) => {
  try {
    const { data } = await profileAPI.setPhoto( image );

    if ( data.resultCode === 0 )
      dispatch( setUserPhotos( data.data.photos ) );
  } catch (error) {
    console.log( error );
  }
};

export default reducer;

export {
  addPost,
  removePost,
  getUserInfo,
  getUserStatus,
  updateUserStatus,
  updateUserPhoto,
};
