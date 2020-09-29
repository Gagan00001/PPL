import React, { useState, axios } from "react";
import UploadForm from "../../../UploadPost/UploadPost";
const UploadPostbtn = (props) => {
  const [isToggleOn, setisToggleOn] = useState(false);
  const [data, setdata] = useState([]);
  return (
    <div>
      <div className="rght_btn">
        <span className="rght_btn_icon">
          <img src="images/btn_iconb.png" alt="up" />
        </span>
        <span className="btn_sep">
          <img src="images/btn_sep.png" alt="sep" />
        </span>
        <a
          href="javascript:void(0)"
          onClick={(e) => {
            setisToggleOn(!isToggleOn);
          }}
        >
          Upload Post
        </a>
      </div>
      {isToggleOn ? <UploadForm fetchImages={props.fetchImages} /> : ""}
      
    </div>
  );
};
export default UploadPostbtn;
