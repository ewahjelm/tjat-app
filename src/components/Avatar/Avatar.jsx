import React from "react";

const Avatar = ({
  src = "https://i.pravatar.cc/150?img=24",
  alt = "User avatar",
  size = 68,
}) => {
  return (
    <div style={{ width: size, height: size }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
