import { sendMessage } from '../../redux/dialogs/reducer';
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
};

export default compose(
  connect( mapStateToProps, methods ),
)( Dialogs );
