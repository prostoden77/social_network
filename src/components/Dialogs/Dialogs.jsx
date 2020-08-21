import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import Dialogitem from "./Dialogitem/Dialogitem";
import Message from "./message/Message";
const Dialogs = (props) => {
  debugger
  let dialogsElements = props.dialogs.dialogsData.map((dialog) => (
    <Dialogitem name={dialog.name} id={dialog.id} ava={dialog.ava} />
  ));
  if (window.location.href.indexOf("sveta") > -1) {
    var messag = props.dialogs.sveta.map((m) => (
      <Message message={m.message} />
    ));
  }
  if (window.location.href.indexOf("dymych") > -1) {
    var messag = props.dialogs.dymych.map((m) => (
      <Message message={m.message} />
    ));
  }
  if (window.location.href.indexOf("sasha") > -1) {
    var messag = props.dialogs.sasha.map((m) => (
      <Message message={m.message} />
    ));
  }
  if (window.location.href.indexOf("victor") > -1) {
    var messag = props.dialogs.victor.map((m) => (
      <Message  message={m.message} />
    ));
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsitems}>{dialogsElements}</div>
      <div className={s.messages}>{messag}</div>
    </div>
  );
};
export default Dialogs;
