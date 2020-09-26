import React, { useState } from "react";
import axios from "axios";
import Images from "../../components/UploadImages/UploadImages";
import Categories from "../../components/Categories/Categories";
import InviteFriends from "../../components/InviteFriendsbtn/InviteFriendsbtn";
import Featured from "../../components/Featured/Featured";
import Friends from "../../components/Checkbox/Checkbox";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
import TimelineDiv from "../../components/TimelineDiv/TimelineDiv";
import UploadPostbtn from "../../components/UploadPostbtn/UploadPostbtn";

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
