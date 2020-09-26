import React from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
const ProfilePic = () => {
  return (
    <div>
      <div className="profile_pic">
        <img src="images/timeline_img1.png" />
        <div className="profile_text">
          <a href="#">Change Profile Pic</a>
        </div>
      </div>
    </div>
  );
};
export default ProfilePic;
