import React from "react";

// dependencies
import IcpTable from "./IcpTable";
import "./reports.css";
// import TableFilter from "./TableFilter";
{
  /* <TableFilter /> */
}

function Reports() {
  return (
    <div id="reports">
      <IcpTable pagination={true} />
    </div>
  );
}

export default Reports;
