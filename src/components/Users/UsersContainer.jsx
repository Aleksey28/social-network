import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, setCurrentPage, toggleFollow } from '../../redux/users/reducer';
import { compose } from 'redux';
import {
  getCurrentPageState,
  getIsFetchingState,
  getIsTogglingFollowUsersState,
  getPageSizeState,
  getUsersCountState,
  getUsersState,
} from '../../redux/users/selector';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers( page = this.props.currentPage ) {
    this.props.getUsers( page, this.props.pageSize );
  }

  render() {
    return (
      <Users
        onPageChange={ this.loadUsers.bind( this ) }
        { ...this.props }/>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    users: getUsersState( state ),
    usersCount: getUsersCountState( state ),
    pageSize: getPageSizeState( state ),
    currentPage: getCurrentPageState( state ),
    isFetching: getIsFetchingState( state ),
    isTogglingFollowUsers: getIsTogglingFollowUsersState( state ),
  };
};

const methods = {
  setCurrentPage,
  getUsers,
  toggleFollow,
};

export default compose(
  connect( mapStateToProps, methods ),
)( UsersContainer );
