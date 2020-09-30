import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Loader from "../../components/Loader/Loader";

const UploadPost = (props) => {
  console.log(props);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [username, setUsername] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const onFileUpload = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("myfile", selectedFile);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("username", username);
    console.log(selectedFile);
    setTimeout(() => {
      axios
        .post("http://localhost:8081/uploadPost", formData)
        .then((res) => {
          console.log("updated file", res.data);
          setTitle("");
          setCategory("");
          setUsername("");
          setIsLoading(false);
          props.fetchImages();
        })
        .catch((err) => {
          console.log("uploadPost", err);
        });
    }, 2000);
  };

  return (
    <div>
      {isLoading && <Loader isLoading={isLoading} />}
      <form
        onSubmit={onFileUpload}
        className="uploadPostForm"
        encType="multipart/form-data"
      >
        <label for="Title" value="File">
          Title
        </label>
        <Input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          name="title"
          value={title}
          placeholder="Title"
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
          <option value="CATS" selected>
            CATS
          </option>
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
        <label for="Username" value="Username">
          Username
        </label>
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          name="username"
          placeholder="Username"
        />
        <label for="myfile">Select a file:</label>
        <Input
          type="file"
          name="myfile"
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
