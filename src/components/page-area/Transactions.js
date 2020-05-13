import React from "react";

import IcpTable from "./IcpTable";
import "./transaction.css";

const Transactions = () => {
  return (
    <div id="transaction">
      <IcpTable pagination={true} />
    </div>
  );
};

export default Transactions;
