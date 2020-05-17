import React from "react";

import TableFilter from "./TableFilter";

import "./top-page.css";

const TopPage = ({ type, title, Icon }) => {
  return (
    <div className="top-page">
      <Icon />
      <span>{title}</span>
      {type == "reports" && <TableFilter />}
    </div>
  );
};

export default TopPage;
