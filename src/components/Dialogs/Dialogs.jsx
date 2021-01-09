import React from "react";
import classes from "./Dialogs.module.css";
import Respondent from "./Respondent/Respondent";
import Message from "./Message/Message";

const Dialogs = ({ dialogsPage, friends }) => {

  const messagesElements = dialogsPage.messagesData.map((item) => {
    let owner;
    if (item.ownerId === 1) {
      owner = {
        id: 1,
        avatar: "https://sun3-12.userapi.com/impf/c850220/v850220643/1cf89f/09Ze66DlRZ8.jpg?size=200x0&quality=96&crop=0,0,1440,2160&sign=f5a0c1a46079ef18be3b6f634672bd5d&ava=1",
      };
    } else {
      owner = friends.find(friend => friend.id === item.ownerId);
    }
    return (
      <li>
        <Message key={item.id} message={item.message} owner={owner}/>
      </li>
    );
  });

  const dialogsElements = dialogsPage.dialogsData.map((item) => {
    const owner = friends.find(friend => friend.id === item.ownerId);
    return (
      <li>
        <Respondent key={item.id} name={item.name} id={item.id} owner={owner}/>
      </li>
    );
  });

  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        {dialogsElements}
      </ul>
      <ul className={classes.messages}>
        {messagesElements}
      </ul>
      <div className={classes.newMessage}>
        <textarea placeholder={"Write your message"}/>
        <button>Send</button>
      </div>
    </section>
  );
};

export default Dialogs;
