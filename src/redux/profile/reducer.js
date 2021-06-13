import profileAPI from '../../api/profileAPI';

const ADD_POST = 'ADD_POST';
const SET_USER_INFO = 'SET_USER_INFO';
const SET_USER_STATUS = 'SET_USER_STATUS';

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
    default:
      return state;
  }
};

const addPost = ( { newPost } ) => ({
  type: ADD_POST,
  newPost,
});

const setUserInfo = ( userInfo ) => ({
  type: SET_USER_INFO,
  userInfo,
});

const setUserStatus = ( userStatus ) => ({
  type: SET_USER_STATUS,
  userStatus,
});

const getUserInfo = ( userId ) => ( dispatch ) => {
  profileAPI.getProfileData( userId )
    .then( data => dispatch( setUserInfo( data ) ) )
    .catch( console.log );
};

const getUserStatus = ( userId ) => ( dispatch ) => {
  profileAPI.getStatus( userId )
    .then( data => dispatch( setUserStatus( data ) ) )
    .catch( console.log );
};

const updateUserStatus = ( status ) => ( dispatch ) => {
  profileAPI.setStatus( status )
    .then( response => {
      if ( response.data.resultCode === 0 )
        dispatch( setUserStatus( status ) );
    } )
    .catch( console.log );
};

export default reducer;

export {
  addPost,
  getUserInfo,
  getUserStatus,
  updateUserStatus,
};
