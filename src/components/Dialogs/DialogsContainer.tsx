import { InitialState as DialogsInitialState, Actions, actions } from '../../redux/dialogs/reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDialogsPageState } from '../../redux/dialogs/selector';
import { getFriendsState } from '../../redux/friends/selector';
import { InitialState as FriendsInitialState } from '../../redux/friends/reducer';
import { AppStateType } from '../../redux/redux-store';

interface StateProps {
  dialogsPage: DialogsInitialState;
  friends: FriendsInitialState;
}

interface DispatchProps {
  sendMessage: (newMessage: string) => Actions;
}

interface OwnProps {
}

const mapStateToProps = (state: AppStateType): StateProps => {
  return {
    dialogsPage: getDialogsPageState(state),
    friends:     getFriendsState(state),
  };
};

const methods: DispatchProps = {
  sendMessage: actions.sendMessage,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, methods);

export default compose(
  connector,
)(Dialogs);
