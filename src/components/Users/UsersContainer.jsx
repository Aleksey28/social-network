import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  setCurrentPage,
  setIsFetching,
  setUsers,
  setUsersCount,
  unfollow,
} from "../../redux/usersReducer";
import axios from "axios";
import { apiSamuraiSettings } from "../../utils/constants";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers(page = this.props.currentPage) {
    this.props.setIsFetching(true);
    axios.get(`${apiSamuraiSettings.baseUrl}/users?count=${this.props.pageSize}&page=${page + 1}`)
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

const methods = {
  follow,
  unfollow,
  setUsers,
  setUsersCount,
  setCurrentPage,
  setIsFetching
}

export default connect(mapStateToProps, methods)(UsersContainer);
