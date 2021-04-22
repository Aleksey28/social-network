import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setUsersAC,
  setUsersCountAC,
  unfollowAC,
} from "../../redux/usersReducer";
import axios from "axios";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers(page = this.props.currentPage) {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page + 1}`)
      .then(response => {
        this.props.setUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      })
      .catch(console.log)
      .finally(() => {
        this.props.setIsFetching(false);
      });
  }

  render() {
    return (
      <Users
        onPageChange={this.loadUsers.bind(this)}
        {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (userId) => {
      dispatch(setUsersAC(userId));
    },
    setUsersCount: (usersCount) => {
      dispatch(setUsersCountAC(usersCount));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
