import React from "react";
import classes from "./User.module.css";
import emptyAvatar from "../../images/empty_avatar.svg";
import Preloader from "../common/Preloader/Preloader";

function Users({
  users,
  usersCount,
  pageSize,
  currentPage,
  onPageChange,
  setCurrentPage,
  follow,
  unfollow,
  isFetching,
}) {

  const countPages = usersCount / pageSize;
  const pagesBar = [];

  for (let i = 0; i < countPages; i++) {
    pagesBar.push(
      <li
        key={i}
        className={`${classes.pages__item} ${currentPage === i
                                             ? classes.pages__item_selected
                                             : undefined}`}
        onClick={_ => {
          setCurrentPage(i);
          onPageChange(i);
        }}>
        {i + 1}
      </li>,
    );
  }

  return (
    isFetching
    ? <Preloader/>
    : <div>
      <nav>
        <ul className={classes.pages}>
          {pagesBar}
        </ul>
      </nav>
      <ul>
        {
          users.map(u => (
            <li key={u.id}>
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
    </div>
  );
}

export default Users;
