import { sendMessage, setValueNewMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = ( state ) => {
  return {
    dialogsPage: state.dialogsPage,
    friends: state.friends,
  };
};

const methods = {
  sendMessage,
  setValueNewMessage,
};

export default compose(
  connect( mapStateToProps, methods ),
)( Dialogs );
