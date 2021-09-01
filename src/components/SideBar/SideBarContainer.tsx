import SideBar from './SideBar';
import { connect } from 'react-redux';
import { getFriendsState } from '../../redux/friends/selector';
import { AppStateType } from '../../redux/redux-store';
import { InitialState } from '../../redux/friends/reducer';

interface StateProps {
  friends: InitialState
}

interface DispatchProps {
}

interface OwnProps {
}

const mapStateToProps = (state: AppStateType): StateProps => {
  return {
    friends: getFriendsState(state),
  };
};

const methods: DispatchProps = {};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(mapStateToProps, methods);

const SideBarContainer = connector(SideBar);

export default SideBarContainer;
