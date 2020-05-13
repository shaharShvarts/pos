import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";

import "./index.css";

const TopNav = () => {
  return (
    <div id="top-nav">
      <header className="nav-header">
        <DashboardIcon />
        <span>Test</span>
      </header>
    </div>
  );
};

export default TopNav;
