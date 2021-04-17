import React from "react";
import classes from "./User.module.css";
import axios from "axios";
import emptyAvatar from "../../images/empty_avatar.svg";

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => this.props.setUsers(response.data.items))
      .catch(console.log);
  }

  render() {

    const countPages = this.props.usersCount / this.props.pageSize;
    const pagesBar = [];

    for (let i = 0; i < countPages; i++) {
      pagesBar.push(
        <li>{i + 1}</li>,
      );
    }

    return (
      <div>
        <nav>
          <ul>
            {pagesBar}
          </ul>
        </nav>
        <ul>
          {
            this.props.users.map(u => (
              <li>
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
