import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let messagesElements = props.statet.map((m) => (
    <Post message={m.message} likesCount={m.likesCount} />
  ));

  let newpostelement = React.createRef();
  let addPost = () => {
    debugger;
    let text = newpostelement.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.MyPosts}>
      <div class={s.MyPoststitle}>
        <h3>
          <strong>My posts</strong>
        </h3>
      </div>
      <div>
        <textarea
          name=""
          ref={newpostelement}
          id="text_area_addpost"
          cols="30"
          rows="3"
        />
        <div>
          <button onClick={addPost} className={s.button}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{messagesElements}</div>
    </div>
  );
};

export default MyPosts;
