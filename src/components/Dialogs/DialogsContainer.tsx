import { InitialState as DialogsInitialState, sendMessage } from '../../redux/dialogs/reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDialogsPageState } from '../../redux/dialogs/selector';
import { getFriendsState } from '../../redux/friends/selector';
import { InitialState as FriendsInitialState } from '../../redux/friends/reducer';

interface MapStateToProps {
  dialogsPage: DialogsInitialState;
  friends: FriendsInitialState;
}

const mapStateToProps = (state: any): MapStateToProps => {
  return {
    dialogsPage: getDialogsPageState(state),
    friends:     getFriendsState(state),
  };
};

const methods = {
  sendMessage,
};

export default compose(
  connect(mapStateToProps, methods),
)(Dialogs);
