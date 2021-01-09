import React from "react";
import classes from "./Dialogs.module.css";
import Respondent from "./Respondent/Respondent";
import Message from "./Message/Message";

const Dialogs = ({ dialogsPage, friends }) => {
  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        {dialogsPage.dialogsData.map((item) => {
          const owner = friends.find(friend => friend.id === item.ownerId);
          return <Respondent key={item.id} name={item.name} id={item.id} owner={owner}/>
        })}
      </ul>
      <ul className={classes.messages}>
        {dialogsPage.messagesData.map((item) => <Message key={item.id} message={item.message}/>)}
      </ul>
    </section>
  );
};

export default Dialogs;
