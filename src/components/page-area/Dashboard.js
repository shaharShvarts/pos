import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import IcpTable from "./IcpTable";
import "./dashboard.css";

const Dashboard = () => {
  // const location = useLocation();
  // const history = useHistory();
  // console.log(history);
  const cardData = [
    { sign: "$", amount: "3,211.15", percent: "80%" },
    { sign: "€", amount: "3,211.15", percent: "80%" },
    { sign: "₪", amount: "3,211.15", percent: "80%" },
  ];

  return (
    <div id="dashboard">
      <div className="card-container">
        {cardData.map((item, index) => (
          <div className="card" key={index}>
            <span className="money-sign">{item.sign}</span>
            <header>בחודש הנוכחי</header>
            <h1 className="dollar">{item.amount}</h1>
            <h3>{item.percent}</h3>
          </div>
        ))}
      </div>

      <IcpTable rowCount={5} pagination={false} />
    </div>
  );
};

export default Dashboard;
