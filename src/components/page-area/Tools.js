import React from "react";
import { useLocation } from "react-router-dom";

import TopPage from "./TopPage";
import "./tools.css";

function Tools() {
  const { title } = useLocation();
  return (
    <div id="tools" className="page">
      <TopPage title={title} />
      Tools
    </div>
  );
}

export default Tools;
