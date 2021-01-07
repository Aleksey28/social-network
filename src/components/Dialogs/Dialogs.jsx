import React from "react";
import classes from "./Dialogs.module.css";
import { useRouteMatch } from "react-router-dom";
import Respondent from "./Respondent/Respondent";
import Message from "./Message/Message";

const Dialogs = () => {
  const { url } = useRouteMatch();
  const dialogsData = [
    {
      id: 1,
      name: "Pety",
    },
    {
      id: 2,
      name: "Vany",
    },
    {
      id: 3,
      name: "Sasha",
    },
  ];

  const messagesData = [
    {
      id: 1,
      message: "Hello",
    },
    {
      id: 2,
      message: "How are you",
    },
    {
      id: 3,
      message: "Buy",
    },
  ];

  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        {dialogsData.map((item) => <Respondent key={item.id} name={item.name} id={item.id}/>)}
      </ul>
      <ul className={classes.messages}>
        {messagesData.map((item) => <Message key={item.id} message={item.message}/>)}
      </ul>
    </section>
  );
};

export default Dialogs;
