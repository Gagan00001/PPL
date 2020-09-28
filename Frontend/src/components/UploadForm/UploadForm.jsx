import React, { useState } from "react";
import axios from "axios";
import Images from "../UploadImages/UploadImages";
const UploadForm = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const onFileUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("myfile", selectedFile);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("username", username);
    console.log(selectedFile);
    axios
      .post("http://localhost:8081/uploadPost", formData)
      .then((res) => {
        console.log("updated file", res.data);
        setTitle("");
        props.fetchImages();
      })
      .catch((err) => {
        console.log("UploadForm", err);
      });
  };

  return (
    <div>
      <form onSubmit={onFileUpload} encType="multipart/form-data">
        <label for="FileTitle" value="FileTitle">
          Title
        </label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name="title"
          id="FileTitle"
          value={title}
          placeholder="File Title"
        />
        <br />
        <label for="Category" value="FileTitle">
          Category
        </label>
        <input
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          type="text"
          name="category"
          id="category"
          placeholder="Category"
        />
        <br />
        <label for="Username" value="Username">
          Username
        </label>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name="username"
          id="Username"
          placeholder="Username"
        />
        <br />
        <label for="Submit" value="Submit"></label>
        <label for="myfile">Select a file:</label>
        <input
          type="file"
          id="myfile"
          name="myfile"
          onChange={(event) => {
            setSelectedFile(event.target.files[0]);
          }}
        />
        <br />
        <input type="Submit" name="Submit" />
        <br />
      </form>
    </div>
  );
};
export default UploadForm;
