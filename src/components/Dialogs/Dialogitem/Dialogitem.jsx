import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import { ee } from "../../../redux/state";
const Dialogitem = (props) => {
  debugger;
  let path = "/dialogs/" + props.name;
  return (
    <div onLoad={ee}> 
      <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
      <div>{props.message}</div>
      <img src={props.ava} />
    </div>
  );
};
export default Dialogitem;
