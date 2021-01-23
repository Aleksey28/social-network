import React from "react";
import { addMessageActionCreator, setValueNewMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({ store }) => {

  const state = store.getState();

  const handleChangeNewMessage = (value) => {
    store.dispatch(setValueNewMessageActionCreator(value));
  };

  const handleClickOnSend = () => {
    store.dispatch(addMessageActionCreator());
  };


  return <Dialogs messagesData={state.dialogsPage.messagesData}
                  dialogsData={state.dialogsPage.dialogsData}
                  valueNewMessage={state.dialogsPage.valueNewMessage}
                  friends={state.friends}
                  onChangeNewMessage={handleChangeNewMessage}
                  onSendMessage={handleClickOnSend}/>;
};

export default DialogsContainer;
