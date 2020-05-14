import React from "react";

import DashboardIcon from "@material-ui/icons/Dashboard";

import "./top-page.css";

const TopPage = ({ title }) => {
  return (
    <div className="top-page">
      <DashboardIcon />
      <span>{title}</span>
    </div>
  );
};

export default TopPage;
