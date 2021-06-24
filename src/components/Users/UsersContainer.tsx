import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Users from './Users';
import { follow, getUsers, InitialState as UsersInitialState, unfollow } from '../../redux/users/reducer';
import {
  getCurrentPageState,
  getIsFetchingState,
  getIsTogglingFollowUsersState,
  getPageSizeState,
  getUsersCountState,
  getUsersState,
} from '../../redux/users/selector';
import { AppStateType } from '../../redux/redux-store';

interface StateProps extends UsersInitialState {
}

interface DispatchProps {
  getUsers: (page: number, pageSize: number) => void;
  follow: (id: string) => void;
  unfollow: (id: string) => void;
}

interface OwnProps {
}

type Props = ConnectedProps<typeof connector>;

const mapStateToProps = (state: AppStateType): StateProps => {
  return {
    users:                 getUsersState(state),
    usersCount:            getUsersCountState(state),
    pageSize:              getPageSizeState(state),
    currentPage:           getCurrentPageState(state),
    isFetching:            getIsFetchingState(state),
    isTogglingFollowUsers: getIsTogglingFollowUsersState(state),
  };
};

const methods: DispatchProps = {
  getUsers,
  follow,
  unfollow,
};

const connector = connect<StateProps, DispatchProps, OwnProps, AppStateType>(
  mapStateToProps,
  methods,
);

class UsersContainer extends React.Component<Props> {
  componentDidMount () {
    this.loadUsers();
  }

  loadUsers (page = this.props.currentPage) {
    this.props.getUsers(page, this.props.pageSize);
  }

  render () {
    return (
      <Users
        onPageChanged={this.loadUsers.bind(this)}
        {...this.props}/>
    );
  }
}

export default connector(UsersContainer);