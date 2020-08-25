import React from "react";
import s from "./Dialogs.module.css";
import Dialogitem from "./Dialogitem/Dialogitem";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/state";
import { ee } from './../../redux/state';



const Dialogs = (props) => {
  debugger;
  let dialogsElements = props.dialogs.dialogsData.map((dialog) => (
    <Dialogitem name={dialog.name} id={dialog.id} ava={dialog.ava} />
  ));
  let messElements = props.dialogs.messages.map((dialogg) => (
    <Dialogitem message={dialogg.message} />
  ));
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
    setTimeout(function(){ee(); document.querySelectorAll("textarea")[0].value='';})

  };
  let newMessageBody = props.dialogs.newMessageBody;
  let onNewMessageChange = (e) => {
    debugger;
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsitems}>{dialogsElements}</div>
      <div className={s.dialogsitems}>
        {messElements}
        <div className={s.areabutton}>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="enter yuor message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
