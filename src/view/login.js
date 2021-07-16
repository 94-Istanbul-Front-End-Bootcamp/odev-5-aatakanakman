import React from "react";
import { Redirect } from "react-router-dom";
import { Icon } from "../component/icon";



const Login = (props) => {

  var user = [];

  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (isLoggedIn == true) {
    return <Redirect to="/home"></Redirect>;
  } else {

  }

  const fetchUser = () => {
    fetch("userData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.map((singleUser) => {
          console.log(user);
          user.push({
            username: singleUser.username,
            password: singleUser.password,
          });
        })
      );
  };


  fetchUser();

  const submit = () => {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (
      user.find((user) => user.username === username) &&
      user.find((user) => user.password === password)

    ) {
      console.log("Başarılı");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username)
      localStorage.setItem("password",password)
    } else {
        console.log("Başarısız")
        
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" action="">
        <div className="login-icon-wrapper">
          <Icon size={50} iconName="twitter" color="#1DA1F2" />
        </div>
        <div>
          <input
            id="username"
            className="user-name-input"
            type="text"
            placeholder="username"
          />
        </div>
        <div>
          <input
            id="password"
            className="password-input"
            type="password"
            placeholder="password"
          />
        </div>
        <button onClick={submit} type="submit" className="login-submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
