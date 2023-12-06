import React, { useState } from "react";

import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Nav from "./Nav";
const Login = () => {
  const navigate = useNavigate(); // Use useNavigate


 

  const [file, setFile]= useState();
  console.log(file);

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
   

  });

  const formData = new FormData();
  formData.append("username", state.username);
  formData.append("email", state.email);
  formData.append("password", state.password);
  formData.append("file", file);

 


  const HandleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
  
    console.log(fieldName, value);
  
    setState({ ...state, [fieldName]: value });
  };
  
  

  const HandleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: formData,
      
    });

    const datahit = await result.json();
    console.log(datahit);
    if (datahit.status === 422 || !datahit) {
      console.log("err");
      alert("Invalid Credentials");
    } else if (datahit.message && datahit.message === "Email Already Exists") {
      // Handle the case where the email is already taken
      alert("Email is already taken. Please choose a different one.");
    } else {
      alert("Login Successfully");
      localStorage.setItem("userprofiledata", JSON.stringify(datahit))
      setState({ ...state, username: "", email: "", password: "", filename: "" });

      // Assuming you have 'useNavigate' properly imported at the beginning of your component
      navigate("/profile");
    }
  };

  return (
    <div>
      <Nav />

      <div
        style={{
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            backgroundColor: "lightgrey",
            padding: "60px",
            borderRadius: "20px",
          }}
        >
          <h2
            className="blue_violet"
            style={{ textAlign: "center", fontSize: "38px" }}
          >
            Login
          </h2>
          <form method="POST" encType="multipart/form-data" onSubmit={HandleSubmit}>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={state.username}
              onChange={HandleChange}
            />
            <input
              type="email"
              name="email"
              className="form-control my-3"
              placeholder="email"
              value={state.email}
              onChange={HandleChange}
            />
            <input
              type="password"
              name="password"
              className="form-control my-3"
              placeholder="Password"
              value={state.password}
              onChange={HandleChange}
            />


            <input
              type="file"
              name="filename"
              className="form-control my-3"
              onChange={e=>setFile(e.target.files[0])}
              
            />

            <button className="btn_color" onClick={HandleChange}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
