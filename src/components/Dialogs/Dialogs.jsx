import React from "react";
import classes from "./Dialogs.module.css";
import Respondent from "./Respondent/Respondent";
import Message from "./Message/Message";

const Dialogs = ({ dialogsPage }) => {
  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        {dialogsPage.dialogsData.map((item) => <Respondent key={item.id} name={item.name} id={item.id}/>)}
      </ul>
      <ul className={classes.messages}>
        {dialogsPage.messagesData.map((item) => <Message key={item.id} message={item.message}/>)}
      </ul>
    </section>
  );
};

export default Dialogs;
