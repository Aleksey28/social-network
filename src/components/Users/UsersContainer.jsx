import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { getUsers, setCurrentPage, toggleFollow } from '../../redux/usersReducer';

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
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isTogglingFollowUsers: state.usersPage.isTogglingFollowUsers,
  };
};

const methods = {
  setCurrentPage,
  getUsers,
  toggleFollow,
};

export default connect( mapStateToProps, methods )( UsersContainer );
