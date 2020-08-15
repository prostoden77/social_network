import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="http://fullhdwallpapers.ru/image/nature/17785/ostrov-palmy.jpg"
        />
      </div>
      <div className={s.avadesc}>ava + description2</div>
      <MyPosts
        updateNewPostText={props.updateNewPostText}
        newPostText={props.profilepage.newPostText}
        statet={props.profilepage.postData}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
