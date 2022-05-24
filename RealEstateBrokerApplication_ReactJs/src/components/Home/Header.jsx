import React from "react";
import {  Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  var styles = {
    navbarbrand: {
      marginTop:"-13px",
      marginLeft:"20px",
      fontSize:"40px"
    },
    span: {
      margin: "auto",
    },
    navLink: {
      fontWeight: "bold",
    },
    success:{
      marginRight:"10px",
    }
    
  };
  return (
    <nav style={{borderRadius:"25px"}}className="navbar navbar-expand-lg navbar-light bg-light" id="rcorner" >
      <div style={styles.navbarbrand} className="navbar-brand">
      🏡
      </div>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" style={styles.navLink}>
              Home
            </Link>
          </li>
        </ul>

        <span style={styles.span} className="navbar-text"></span>

        <div className="dropdown">
          <button  className="btn1 success1 btn-rounded" data-mdb-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown Menu ▼
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <Link className="dropdown-item" to="/login">
              Customer Login
            </Link>
            <Link className="dropdown-item" to="/register">
              Customer Register
            </Link>
            <Link className="dropdown-item" to="/brokerlogin">
              Broker Login
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
