import React from "react";
import classes from "./Respondent.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";

const Respondent = ({ name, id, owner }) => {
  const { path } = useRouteMatch();
  return (
    <div className={classes.respondent}>
      <NavLink to={`${path}/${id}`}>
        <img src={owner.avatar} alt="respondent's avatar"/>
        {owner.name}
      </NavLink>
    </div>
  );
};

export default Respondent;