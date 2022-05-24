import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";

const BrLogin = () => {
  let nav = useNavigate();

  const [user, setUser] = useState({ br_username: "", br_password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      br_username: user.br_username,
      br_password: user.br_password,
    };

    console.log(sendData);
    axios.post("http://localhost:3300/brlogin", sendData).then((result) => {
      let d = result.data.auth;
      let u = result.data.bnp;
      if (!d || u) {
        alert("Invalid Username or Password");
      } else {
        alert("Login Successful");
        nav("/property");
      }
    });
  };

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "40px",
          marginLeft: "250px",
          //backgroundColor: "#E9E9E9",
          width: "800px",
          height: "300px",
          borderRadius: "25px",
          border: "1px solid #BFBFBF",
          // eslint-disable-next-line
          backgroundColor: "white",
          boxShadow: "10px 10px 5px #aaaaaa",
        }}
      >
        <form onSubmit={submitForm} style={{ marginTop: "10px" }}>
          <div className="main-box1">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Broker Login</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">Broker Username</div>
              <div className="col-md-6">
                <input
                  style={{ width: "200px" }}
                  type="text"
                  name="br_username"
                  className="form-control"
                  onChange={handleChange}
                  value={user.br_username}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Broker Password</div>
              <div className="col-md-6">
                <input
                  style={{ width: "200px" }}
                  type="text"
                  name="br_password"
                  className="form-control"
                  onChange={handleChange}
                  value={user.br_user}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <input
                  style={{ width: "40%" }}
                  type="submit"
                  className="btn btn-success"
                  value="Login"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BrLogin;
