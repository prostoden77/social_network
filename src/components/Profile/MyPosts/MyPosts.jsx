import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newpostelement=React.createRef()
  let addpost=()=>{alert(newpostelement.current.value)}

  let messagesElements = props.statet.map((m) => (
    <Post message={m.message} likesCount={m.likesCount} />
  ));
  return (
    <div className={s.MyPosts}>
      <div class={s.MyPoststitle}>
        <h3>
          <strong>My posts</strong>
        </h3>
      </div>
      <div>
        <textarea name="" ref={newpostelement} id="text_area_addpost" cols="30" rows="3" />
        <div>
          <button onClick={addpost} className={s.button} >Add post</button>
        </div>
      </div>
      <div className={s.posts}>{messagesElements}</div>
    </div>
  );
};

export default MyPosts;
