import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
  follow,
  getUsers,
  setCurrentPage,
  setIsFetching,
  setIsFollowing,
  setUsers,
  setUsersCount,
  unfollow,
} from '../../redux/usersReducer';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers( page = this.props.currentPage ) {
    getUsers( page, this.props.pageSize );
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
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingUsers: state.usersPage.isFollowingUsers,
  };
};

const methods = {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsFetching,
  setIsFollowing,
};

export default connect( mapStateToProps, methods )( UsersContainer );
