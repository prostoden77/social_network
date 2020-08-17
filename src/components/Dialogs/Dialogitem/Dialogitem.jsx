import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
const Dialogitem = (props) => {
  let path = "/dialogs/" + props.name;
  return (
    <div>
    <div className={s.dialog + " " + s.active}>
      
      <NavLink to={path}>{props.name}</NavLink>
    </div>
    <img src={props.ava} alt=""/>
    </div>
    
  );
};
export default Dialogitem;
