import React from "react";
import s from "./../Dialogs.module.css";
import ss from "./../../Profile/MyPosts/MyPosts.module.css";
import Message from './Message';


const Addpost = (props) => {
if(window.location.href.length>29){
return(<div className={s.dialogs}>
  <div className='area'>
    <textarea name="" id="" cols="50" rows="3" />
    <div>
    <button className={ss.button}>send message</button>
  </div>
      </div>
</div>)
}else return <div></div>
}
export default Addpost