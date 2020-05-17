import React from "react";
import { useLocation } from "react-router-dom";
import AssessmentIcon from "@material-ui/icons/Assessment";

// dependencies
import TopPage from "./TopPage";
import IcpTable from "./IcpTable";

import "./reports.css";

function Reports() {
  const { title, type } = useLocation();
  return (
    <div id="reports" className="page">
      <TopPage title={title} type={type} Icon={AssessmentIcon} />
      <IcpTable pagination={true} />
    </div>
  );
}

export default Reports;
