import React from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./tableFilter.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "12px",
    left: "12px",
    zIndex: "-1",
  },
});

const TableFilter = () => {
  const classes = useStyles();

  return (
    <div className="select">
      <ArrowDropDownIcon className={classes.root} />
      <select>
        <option selected disabled>
          בחר סינון
        </option>
        <option value="date">תאריך</option>
        <option value="amount">סכום</option>
        <option value="currency">מטבע</option>
        <option value="exchange">תמורה</option>
        <option value="card">כרטיס</option>
        <option value="payments">תשלומים</option>
        <option value="card-number">מספר כרטיס</option>
        <option value="approval">מספר אישור</option>
      </select>
    </div>
  );
};

export default TableFilter;
