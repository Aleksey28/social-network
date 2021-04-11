import React from "react";
import classes from "./User.module.css";

const Users = ({ users, setUsers, follow, unfollow }) => {

  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        avatar: "https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",
        fullName: "Aleksey",
        status: "searching yourself",
        location: {
          city: "St.Petersburg",
          country: "Russia",
        },
        followed: true,
      },
      {
        id: 2,
        avatar: "https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",
        fullName: "Ivan",
        status: "searching yourself",
        location: {
          city: "Moscow",
          country: "Russia",
        },
        followed: false,
      },
      {
        id: 3,
        avatar: "https://sun9-32.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=1440x2160&quality=96&proxy=1&sign=8cd83def1f42c508f1c64c607f5504fd&type=album",
        fullName: "Petr",
        status: "searching yourself",
        location: {
          city: "New York",
          country: "USA",
        },
        followed: true,
      },
    ]);
  }

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
