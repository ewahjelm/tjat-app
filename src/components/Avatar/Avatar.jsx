import React from "react";
import styles from "./Avatar.module.css"

const Avatar = ({
  src = "https://i.pravatar.cc/150?img=24",
  alt = "User avatar",
  // size = 50,
}) => {
  return (
    <div className = { styles.avatar } >
      <img src={src} alt={alt} className = {styles.image}/>
    </div>
  );
};

export default Avatar;
