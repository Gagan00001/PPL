import React from "react";
import { connect, useSelector } from "react-redux";

const ProfileForm = (props) => {
  const user = useSelector((state) => state?.user);
  const { FirstName = "....", LastName = "..." } = user || {};
  return (
    <div>
      <div className="edit_div">
        <a href="#">
          Edit <img src="images/timeline_img.png" />
        </a>
      </div>
      <div className="profile_form">
        <ul>
          <li>
            <div className="div_name1">Name :</div>
            <div className="div_name2">
              {" "}
              {FirstName.charAt(0).toUpperCase() +
                FirstName.slice(1) +
                " " +
                LastName.charAt(0).toUpperCase() +
                LastName.slice(1)}
            </div>
          </li>
          <li>
            <div className="div_name1">Sex :</div>
            <div className="div_name2">Female</div>
          </li>
          <li>
            <div className="div_name1">Description :</div>
            <div className="div_name3">
              This is an example of a comment. You can create as many comments
              like this one or sub comments as you like and manage all of your
              content inside Account.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileForm;
