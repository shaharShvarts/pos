import React from "react";
import { useLocation } from "react-router-dom";
import CreditCardIcon from "@material-ui/icons/CreditCard";

import TopPage from "./TopPage";
import IcpTable from "./IcpTable";
import "./transaction.css";

const Transactions = () => {
  const { title, type } = useLocation();
  return (
    <div id="transaction" className="page">
      <TopPage title={title} type={type} Icon={CreditCardIcon} />
      <IcpTable pagination={true} />
    </div>
  );
};

export default Transactions;
