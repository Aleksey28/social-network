import profileAPI from '../api/profileAPI';

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  email: '',
  login: '',
  userId: '',
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return  {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
};

const setUserData = ({email, login, userId}) => ({
  type: SET_USER_DATA,
  data: {email, login, userId}
})

const authorize =() => ( dispatch ) => {
  profileAPI.auth()
    .then( data => {
      if ( data.resultCode === 1 ) {
        throw new Error( data.messages[0] );
      }
      const { email, login, id: userId } = data.data;
      dispatch( setUserData( { email, login, userId } ) );
    } )
    .catch( console.log );
};


export default authReducer;

export {
  authorize
};
