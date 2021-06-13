import { sendMessage } from '../../redux/dialogs/reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDialogsPageState } from '../../redux/dialogs/selector';

const mapStateToProps = ( state ) => {
  return {
    dialogsPage: getDialogsPageState( state ),
    friends: state.friends,
  };
};

const methods = {
  sendMessage,
};

export default compose(
  connect( mapStateToProps, methods ),
)( Dialogs );
