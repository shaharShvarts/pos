import React from "react";

// dependencies
import IcpTable from "./IcpTable";
import "./reports.css";

function Reports() {
  return (
    <div id="reports">
      <IcpTable pagination={true} />
    </div>
  );
}

export default Reports;
