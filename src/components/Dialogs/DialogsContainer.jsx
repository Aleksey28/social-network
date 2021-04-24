import { sendMessage, setValueNewMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    friends: state.friends,
  };
};

const methods = {
  sendMessage,
  setValueNewMessage,
};

const DialogsContainer = connect(mapStateToProps, methods)(Dialogs);

export default DialogsContainer;
