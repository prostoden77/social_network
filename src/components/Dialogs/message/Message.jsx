import React from "react";
import s from "./../Dialogs.module.css";
import ss from "./../../Profile/MyPosts/MyPosts.module.css";
import Addpost from './Addpost';


const Message = (props) => {
  debugger
  return (<div>
    <div className={s.dialog}>{props.message}
  </div>
  </div>
  
  )
};
export default Message;
