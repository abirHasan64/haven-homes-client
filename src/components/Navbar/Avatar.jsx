import React, { useContext } from "react";
import avatar from "../../assets/images/placeholder.jpg";
import { AuthContext } from "../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <img
        className="rounded-full"
        src={user && user.photoURL ? user.photoURL : avatar}
        alt="profile"
        width="30"
        height="30"
      />
    </div>
  );
};

export default Avatar;
