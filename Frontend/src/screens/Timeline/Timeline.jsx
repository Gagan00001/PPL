import React, { useState } from "react";
import axios from "axios";
import UploadImages from "./Component/UploadImages/UploadImages";
import Categories from "./Component/Categories/Categories";
import InviteFriends from "./Component/InviteFriendsbtn/InviteFriendsbtn";
import Featured from "./Component/Featured/Featured";
import Friends from "./Component/Checkbox/Checkbox";
import ProfileForm from "./Component/ProfileForm/ProfileForm";
import ProfilePic from "./Component/ProfilePic/profilePic";
import TimelineDiv from "./Component/TimelineDiv/TimelineDiv";
import UploadPostbtn from "./Component/UploadPostbtn/UploadPostbtn";
import { connect } from "redux";

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
        props.post(data);
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
            <UploadPostbtn fetchImages={fetchImages} />
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
            <UploadImages fetchImages={fetchImages} data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     abc: () => dispatch(post(data))
//   }
// }

export default Timeline;
