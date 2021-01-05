import React from 'react';
import classes from "./Messages.module.css";

const Messages = () => {
  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        <li className={classes.respondent}>Pety</li>
        <li className={classes.respondent}>Vany</li>
        <li className={classes.respondent}>Sasha</li>
        <li className={classes.respondent}>Lexa</li>
        <li className={classes.respondent}>Leon</li>
      </ul>
      <ul className={classes.messages}>
        <li className={classes.message}>Hello</li>
        <li className={classes.message}>How are you</li>
        <li className={classes.message}>Buy</li>
      </ul>
    </section>
  )
}

export default Messages;
