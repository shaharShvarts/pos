import React from "react";
import UserInfo from "./UserInfo";
import PageTabs from "./PageTabs";
import "./index.css";

const InfoPanel = () => {
  return (
    <div id="info-panel">
      <UserInfo />
      <PageTabs />
    </div>
  );
};

export default InfoPanel;
