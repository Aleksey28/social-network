import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Users from './Users';
import {
  follow,
  getUsers,
  InitialState as UsersInitialState,
  unfollow,
  UserFiltersType,
} from '../../redux/users/reducer';
import {
  getCurrentPageState,
  getFilters,
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
  getUsers: (page: number, pageSize: number, filters: UserFiltersType) => void;
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
    filters:               getFilters(state),
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
  render () {
    return (
      <Users/>
    );
  }
}

export default connector(UsersContainer);
