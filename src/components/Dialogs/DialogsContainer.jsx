import { addMessageActionCreator, setValueNewMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    friends: state.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeNewMessage: (value) => {
      dispatch(setValueNewMessageActionCreator(value));
    },
    onSendMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
