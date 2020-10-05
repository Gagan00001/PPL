import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions";

const UploadPost = (props) => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const onFileUpload = (event) => {
    event.preventDefault();
    // setIsLoading(true);
    var user = JSON.parse(localStorage.getItem('user'));
    const formData = new FormData();
    formData.append("myfile", selectedFile);
    formData.append("caption", caption);
    formData.append("category", category);
    console.log(".>>>>>>>>>>>>>>",user.Username);
    formData.append("username",user.Username)
    console.log(selectedFile);
      axios
        .post("http://localhost:8081/uploadPost", formData)
        .then((res) => {
          console.log("updated file", res.data);
          setCaption("");
          setCategory("Choose ");
          document.getElementById("myfile").value = "";
          dispatch(setLoading(true));
          props.fetchImages();
        })
        .catch((err) => {
          console.log("uploadPost", err);
        });
  };

  return (
    <div>
      <form
        onSubmit={onFileUpload}
        className="uploadPostForm"
        encType="multipart/form-data"
      >
        <label for="Caption" value="Caption">
          Caption
        </label>
        <Input
          onChange={(e) => {
            setCaption(e.target.value);
          }}
          type="text"
          name="caption"
          placeholder="Caption"
        />
        <label for="Category" value="Category">
          Category
        </label>
        <select
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="Choose Category" selected hidden>
            Choose Category
          </option>
          <option value="CATS">CATS</option>
          <option value="DOGS">DOGS</option>
          <option value="BIRDS">BIRDS</option>
          <option value="RABBIT">RABBIT</option>
          <option value="OTHERS">OTHERS</option>
        </select>
        {/* <Input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          name="category"
          value={category}
          placeholder="Category"
        /> */}
        {/* <label for="Username" value="Username">
          Username
        </label> */}
        {/* <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          name="username"
          placeholder="Username"
        /> */}
        <label for="myfile">Select a file:</label>
        <Input
          type="file"
          name="myfile"
          id="myfile"
          onChange={(event) => {
            setSelectedFile(event.target.files[0]);
          }}
        />
        <label for="Submit" value="Submit"></label>
        <Input type="Submit" name="Submit" value="Submit" />
        <br />
        <br />
      </form>
    </div>
  );
};
export default UploadPost;
