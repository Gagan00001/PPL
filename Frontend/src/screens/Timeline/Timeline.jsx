import React, { useState } from "react";
import axios from "axios";
import Images from "../../components/uploadImages/Images";
import Categories from "../../components/categories/Categories";
import InviteFriends from "../../components/inviteFriendsbtn/InviteFriendsbtn";
import Featured from "../../components/featured/Featured";
import Friends from "../../components/checkbox/Checkbox";
import ProfileForm from "../../components/profileForm/ProfileForm";
import ProfilePic from "../../components/profilePic/ProfilePic";
import TimelineDiv from "../../components/timelineDiv/TimelineDiv";
import UploadPostbtn from "../../components/uploadPostbtn/UploadPostbtn";

const Timeline = (props) => {
  const [data, setdata] = useState([]);
  const fetchImages = (e) => {
    console.log("function Calling ");
    axios
      .get("http://localhost:8081/FetchImage", {})
      .then((res) => {
        setdata(res.data.reverse());
        console.log("response", res);
        console.log("data", data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="content_rgt">
            <UploadPostbtn />
            <InviteFriends />
            <Categories />
            <Featured />
          </div>
          <div className="content_lft">
            <div className="contnt_1">
              <Friends />
              <div className="timeline_div">
                <div className="timeline_div1">
                  <ProfilePic />
                  <div className="profile_info">
                    <ProfileForm />
                  </div>
                </div>
                <TimelineDiv />
              </div>
            </div>
            <Images fetchImages={fetchImages} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Timeline;
