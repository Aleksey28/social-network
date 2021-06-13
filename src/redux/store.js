import profileReducer from "./profile/reducer";
import dialogsReducer from "./dialogs/reducer";
import friendsReducer from "./friendsReducer";

const store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Pety",
          ownerId: 2,
        },
        {
          id: 2,
          name: "Vany",
          ownerId: 3,
        },
        {
          id: 3,
          name: "Sasha",
          ownerId: 4,
        },
      ],
      messagesData: [
        {
          id: 1,
          message: "Hello",
          ownerId: 1,
        },
        {
          id: 2,
          message: "How are you",
          ownerId: 2,
        },
        {
          id: 3,
          message: "Buy",
          ownerId: 2,
        },
      ],
      valueNewMessage: "",
    },
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "How are you?",
        },
        {
          id: 2,
          message: "It is my first post",
        },
      ],
      valueNewPost: "",
    },
    friends: [
      {
        id: 2,
        name: "Pety",
        avatar: "https://sun9-1.userapi.com/impf/c623226/v623226632/20ec3/wFW0LmxAF5E.jpg?size=1536x2048&quality=96&proxy=1&sign=3c23701904d2894bc56f0539b108dc64&type=album",
      },
      {
        id: 3,
        name: "Vany",
        avatar: "https://sun9-31.userapi.com/impf/K_i77x3c5rD-pxY1Hu_UzX7uaweHBadmZjnIUg/BaSOzQ1brCo.jpg?size=1620x2160&quality=96&proxy=1&sign=6977728d5d7739f0ff9bf4dd584c78c8&type=album0",
      },
      {
        id: 4,
        name: "Sasha",
        avatar: "https://sun9-29.userapi.com/impg/7pSRuhuz_LBQ1A7D-_eoWP0JyE8cMhl4NuHAiw/HuSEMS0th20.jpg?size=1906x2160&quality=96&proxy=1&sign=cc30984ecfe23af9466d513b63073748&type=album",
      },
    ],
  },
  _subscriber() {
    console.log("I don't have observer!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    friendsReducer(this._state.friends, action);
    this._subscriber(this._state);
  },
};

export default store;

