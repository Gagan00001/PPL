import React, { useEffect } from "react";

const Images = (props) => {
  // const[addr,setaddr]= useState("");
  var asd;
  const { data, fetchImages } = props;
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      {data.map((path, index) => (
        <div className="contnt_2">
          <div className="div_a">
            {/* {(asd = "http://localhost:8081/" + path.imageupload)}; */}
            <div className="div_title">
              This is the Image of {path.category}
            </div>
            <div className="btm_rgt">
              <div className="btm_arc">{path.category}</div>
            </div>
            <div className="div_top">
              <div className="div_top_lft">
                <img src="images/img_6.png" />
                {path.username}
              </div>
              <div className="div_top_rgt">
                <span className="span_date">{path.date}</span>
                <span className="span_time">{path.time}</span>
              </div>
            </div>
            <div className="div_image">
              <img
                src={"http://localhost:8081/" + path.imageupload}
                alt="pet"
              />
            </div>
            <div className="div_btm">
              <div className="btm_list">
                <ul>
                  <li>
                    <a href="#">
                      <span className="btn_icon">
                        <img src="images/icon_001.png" alt="share" />
                      </span>
                      Share
                    </a>
                  </li>
                  <li>
                    <a href={asd} download>
                      <span className="btn_icon">
                        <img src="images/icon_002.png" alt="share" />
                      </span>
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="btn_icon">
                        <img src="images/icon_003.png" alt="share" />
                      </span>
                      0 Likes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="btn_icon">
                        <img src="images/icon_004.png" alt="share" />
                      </span>
                      4 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Images;
