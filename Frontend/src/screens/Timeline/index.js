import React, { useState, useEffect } from "react";
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
import Header from "../../components/Header";

const Timeline = (props) => {
  useEffect(() => {
    window.addEventListener("load", () => {
      props.history.replace("/");
    });
  }, []);

  const [data, setdata] = useState([]);
  const fetchImages = (e) => {
    axios
      .get("http://localhost:8081/FetchImage", {})
      .then((res) => {
        setdata(res.data.reverse());
        console.log("response", res);
        // props.post(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <Header logout={true} />
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
