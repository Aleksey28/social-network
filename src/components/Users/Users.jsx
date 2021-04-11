import React from "react";
import classes from "./User.module.css";
import axios from "axios";
import emptyAvatar from '../../images/empty_avatar.svg';

const Users = ({ users, setUsers, follow, unfollow }) => {

  if (users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => setUsers(response.data.items))
      .catch(console.log);
  }

  return (
    <ul>
      {
        users.map(u => (
          <li>
            <div>
              <img src={u.photos.small || emptyAvatar} alt="avatar" className={classes.avatar}/>
              {u.followed
               ? <button onClick={() => {unfollow(u.id);}}>Follow</button>
               : <button onClick={() => {follow(u.id);}}>Unfollow</button>}
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
  );
};

export default Users;
