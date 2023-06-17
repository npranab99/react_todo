import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from "jsonwebtoken";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const URL = "https://jsonplaceholder.typicode.com/users/1";

  const usenevigate = useNavigate();
  const auth = async function() {
    try {
      const user = await axios.get(URL);
      const userDetails = user.data;
      if (userDetails.username === pass && userDetails.email === email) {
        let data = { email, pass };
        const token = jwt.sign(data, "secret_key");
        sessionStorage.setItem("token", token);
        usenevigate(`/login/${userDetails.username}`);
      } else {
        alert("please enter valid id or password");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  function login(e) {
    e.preventDefault();
    if (email === "" || pass === null) {
      alert("Fill Email");
    }
    if (pass === "" || email === null) {
      alert("Fill Password");
    } else {
      auth();
    }
  }

  return (
    <>
      <div className="App_login">
        <h1 className="center_h1">Login</h1>
        <form onSubmit={login}>
          <div className={`txt_field ${email !== "" ? "focused" : ""}`}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // className={email !== "" ? "focused" : ""}
            />
            <span></span>
            <label>User Email</label>
          </div>
          <div className={`txt_field ${pass !== "" ? "focused" : ""}`}>
            <input
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <button className="btn_login" type="submit">
            Login
          </button>
        </form>
        <br />
      </div>
    </>
  );
}
export default Login;
