import React from "react";
import { useLocation } from "react-router-dom";
import BuildIcon from "@material-ui/icons/Build";

import TopPage from "./TopPage";
import "./tools.css";

function Tools() {
  const { title, type } = useLocation();
  return (
    <div id="tools" className="page">
      <TopPage title={title} type={type} Icon={BuildIcon} />
      Tools
    </div>
  );
}

export default Tools;
