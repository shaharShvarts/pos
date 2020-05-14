import React from "react";
import { useLocation } from "react-router-dom";

// dependencies
import TopPage from "./TopPage";
import IcpTable from "./IcpTable";
import "./reports.css";

function Reports() {
  const { title } = useLocation();
  return (
    <div id="reports" className="page">
      <TopPage title={title} />
      <IcpTable pagination={true} />
    </div>
  );
}

export default Reports;
