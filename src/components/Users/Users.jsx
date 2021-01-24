import React from "react";
import classes from "./User.module.css";

const Users = ({ users, follow, unfollow }) => {
  return (
    <ul>
      {
        users.map(u => (
          <li>
            <div>
              <img src={u.avatar} alt="avatar" className={classes.avatar}/>
              {u.followed
               ? <button onClick={() => {unfollow(u.id);}}>Follow</button>
               : <button onClick={() => {follow(u.id);}}>Unfollow</button>}
            </div>
            <div>
              <div>
                <p>{u.fullName}</p>
                <p>{u.status}</p>
              </div>
              <div>
                <p>{u.location.country}</p>
                <p>{u.location.city}</p>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default Users;
