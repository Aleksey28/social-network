import React from "react";
import classes from "./User.module.css";
import axios from "axios";
import emptyAvatar from "../../images/empty_avatar.svg";

class Users extends React.Component {

  componentDidMount() {
    this._reloadUsers();
  }

  _reloadUsers(page = this.props.currentPage) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page + 1}`)
      .then(response => {
        this.props.setUsersCount(response.data.totalCount);
        this.props.setUsers(response.data.items);
      })
      .catch(console.log);
  }

  render() {

    const countPages = this.props.usersCount / this.props.pageSize;
    const pagesBar = [];

    for (let i = 0; i < countPages; i++) {
      pagesBar.push(
        <li
          key={i}
          className={`${classes.pages__item} ${this.props.currentPage === i
                                               ? classes.pages__item_selected
                                               : undefined}`}
          onClick={_ => {
            this.props.setCurrentPage(i);
            this._reloadUsers(i);
          }}>
          {i + 1}
        </li>,
      );
    }

    return (
      <div>
        <nav>
          <ul className={classes.pages}>
            {pagesBar}
          </ul>
        </nav>
        <ul>
          {
            this.props.users.map(u => (
              <li key={u.id}>
                <div>
                  <img src={u.photos.small || emptyAvatar} alt="avatar" className={classes.avatar}/>
                  {u.followed
                   ? <button onClick={() => {this.props.unfollow(u.id);}}>Follow</button>
                   : <button onClick={() => {this.props.follow(u.id);}}>Unfollow</button>}
                </div>
                <div>
                  <div>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Users;
