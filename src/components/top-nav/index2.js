import React from "react";
import Notification from "./Notification";
import Login from "../../img/logo.svg";
import "./index.css";

const TopNav = () => {
  return (
    <div id="top-nav">
      <div className="massage">
        <Notification />
      </div>
      <div className="img-wrap">
        <img src={Login} alt="logo" height="100%" />
      </div>
    </div>
  );
};

export default TopNav;
