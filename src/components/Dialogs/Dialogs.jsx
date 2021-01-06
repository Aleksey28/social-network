import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";

const Respondent = ({ name, id }) => {
  const { path } = useRouteMatch();
  return (
    <li className={classes.respondent}>
      <NavLink to={`${path}/${id}`}>
        {name}
      </NavLink>
    </li>
  );
};

const Message = ({ message }) => {
  return (
    <li className={classes.message}>{message}</li>
  )
};

const Dialogs = () => {
  const { url } = useRouteMatch();
  return (
    <section className={classes.dialogs}>
      <ul className={classes.respondents}>
        <Respondent name={"Pety"} id={"1"}/>
        <Respondent name={"Vany"} id={"2"}/>
        <Respondent name={"Sasha"} id={"3"}/>
      </ul>
      <ul className={classes.messages}>
        <Message message={"Hello"}/>
        <Message message={"How are you"}/>
        <Message message={"Buy"}/>
      </ul>
    </section>
  );
};

export default Dialogs;
