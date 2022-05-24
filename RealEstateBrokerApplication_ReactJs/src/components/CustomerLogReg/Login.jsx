import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";

const Login = () => {
  let nav = useNavigate();

  const [user, setUser] = useState({ cust_name: "", cust_password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      cust_name: user.cust_name,
      cust_password: user.cust_password,
    };

    axios.post("http://localhost:3300/login", sendData).then((result) => {
      let d = result.data.auth;
      let u = result.data.unp;
      if (!d || u) {
        alert("Invalid Username or Password");
      } else {
        alert("Login Successful");
        nav("/customer");
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
            width: "800px",
            height: "350px",
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
                  <h1>Enter Your Credentials</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">Customer Username</div>
                <div className="col-md-6">
                  <input
                    style={{ width: "200px" }}
                    type="text"
                    name="cust_name"
                    className="form-control"
                    onChange={handleChange}
                    value={user.cust_name}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">Customer Password</div>
                <div className="col-md-6">
                  <input
                    style={{ width: "200px" }}
                    type="text"
                    name="cust_password"
                    className="form-control"
                    onChange={handleChange}
                    value={user.cust_user}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <input
                    style={{width:"40%"}}
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

export default Login;
