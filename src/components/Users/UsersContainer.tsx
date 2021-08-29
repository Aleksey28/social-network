import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, getUsers, InitialState, unfollow } from '../../redux/users/reducer';
import { compose } from 'redux';
import {
  getCurrentPageState,
  getIsFetchingState,
  getIsTogglingFollowUsersState,
  getPageSizeState,
  getUsersCountState,
  getUsersState,
} from '../../redux/users/selector';

interface UsersContainerProps extends InitialState {
  getUsers: any;
  follow: any;
  unfollow: any;
}

class UsersContainer extends React.Component {

  props!: UsersContainerProps;

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

const mapStateToProps = (state: any) => {
  return {
    users:                 getUsersState(state),
    usersCount:            getUsersCountState(state),
    pageSize:              getPageSizeState(state),
    currentPage:           getCurrentPageState(state),
    isFetching:            getIsFetchingState(state),
    isTogglingFollowUsers: getIsTogglingFollowUsersState(state),
  };
};

const methods = {
  getUsers,
  follow,
  unfollow,
};

export default compose(
  connect(mapStateToProps, methods),
// @ts-ignore
)(UsersContainer);
