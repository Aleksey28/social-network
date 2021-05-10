import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage, setIsFetching, setUsers, setUsersCount, unfollow } from '../../redux/usersReducer';
import usersAPI from '../../api/usersAPI';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers( page = this.props.currentPage ) {
    this.props.setIsFetching( true );
    usersAPI.getUsers( page + 1, this.props.pageSize )
      .then( data => {
        this.props.setUsersCount( data.totalCount );
        this.props.setUsers( data.items );
      } )
      .catch( console.log )
      .finally( () => {
        this.props.setIsFetching( false );
      } );
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
  };
};

const methods = {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsFetching,
};

export default connect( mapStateToProps, methods )( UsersContainer );
