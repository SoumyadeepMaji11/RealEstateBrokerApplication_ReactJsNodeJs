import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Home/Header";

const Register = (props) => {
  let nav = useNavigate();

  const [data, setData] = useState({
    cust_id: "",
    cust_name: "",
    cust_password: "",
    cust_gender: "",
    cust_age: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    //console.log(data);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      cust_id: data.cust_id,
      cust_name: data.cust_name,
      cust_password: data.cust_password,
      cust_gender: data.cust_gender,
      cust_age: data.cust_age,
    };

    console.log(sendData);
    axios.post("http://localhost:3300/addcustomer", sendData).then((result) => {
      if (result.data.Status === "Invalid" || result.data.up) {
        alert("Username already in use");
      } else {
        alert("Registration Successful");
        nav("/");
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
          backgroundColor: "#E9E9E9",
          width: "800px",
          height: "470px",
          borderRadius: "25px",
          border: "1px solid #BFBFBF",
           // eslint-disable-next-line 
          backgroundColor: "white",
          boxShadow: "10px 10px 5px #aaaaaa",
        }}
      >
        <div className="main-box">
          <form onSubmit={submitForm} style={{marginTop:"10px"}}>
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Registration</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Customer ID</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="cust_id"
                  className="form-control"
                  onChange={handleChange}
                  value={data.cust_id}
                  required
                />
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
                  value={data.cust_name}
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
                  value={data.cust_password}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Customer Gender</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="cust_gender"
                  className="form-control"
                  onChange={handleChange}
                  value={data.cust_gender}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">Customer Age</div>
              <div className="col-md-6">
                <input
                style={{ width: "200px" }}
                  type="text"
                  name="cust_age"
                  className="form-control"
                  onChange={handleChange}
                  value={data.cust_age}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-center">
                <input
                  style={{width:"40%"}}
                  type="submit"
                  name="submit"
                  value="Register"
                  className="btn btn-success"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
