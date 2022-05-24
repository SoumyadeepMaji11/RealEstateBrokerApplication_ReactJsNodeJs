import React from "react";
import "./BrokerPopup.css";
import { Link } from "react-router-dom";
import confetti from "./confetti.mp4";

const BrokerPopup = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          left: "25%",
          width: "50%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={confetti} type="video/mp4" />
      </video>
      <div className="brpop">
        <div className="popup center">
          <div className="icon">
            <i>
              <h2 style={{ marginTop: "10px", color: "#34f234" }}>✔</h2>
            </i>
          </div>
          <div class="title">Congratulations!!</div>
          <div class="description">You have made a Deal</div>
          <div className="dismiss-btn">
            <Link style={{ color: "white" }} to="/customer">
              <button id="dismiss-popup-btn">Dismiss</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrokerPopup;
