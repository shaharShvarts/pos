import React from "react";
import { useLocation } from "react-router-dom";

import TopPage from "./TopPage";
import IcpTable from "./IcpTable";
import "./transaction.css";

const Transactions = () => {
  const { title } = useLocation();
  return (
    <div id="transaction" className="page">
      <TopPage title={title} />
      <IcpTable pagination={true} />
    </div>
  );
};

export default Transactions;
