import React from "react";
import { Link } from "react-router-dom";
//import "./styles.css";

const Header = () => {
  var styles = {
    navbarbrand: {
      marginTop: "-13px",
      marginLeft: "20px",
      fontSize: "40px",
    },
    span: {
      margin: "auto",
    },
    navLink: {
      fontWeight: "bold",
    },
    success: {
      marginRight: "10px",
    },
  };
  return (
    <nav
      style={{ borderRadius: "25px" }}
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="rcorner"
    >
      <div style={styles.navbarbrand} className="navbar-brand">
        📝
      </div>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/addprop" className="nav-link" style={styles.navLink}>
              AddProperty
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/property" className="nav-link" style={styles.navLink}>
              ViewProperty
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/deal" className="nav-link" style={styles.navLink}>
              ViewDeals
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/allcustomer" className="nav-link" style={styles.navLink}>
              ViewCustomer
            </Link>
          </li>
        </ul>

        <span style={styles.span} className="navbar-text"></span>
        <Link style={{ color: "white", marginRight: "1%" }} to="/">
          <button type="button" class="btn btn-danger btn-rounded">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
