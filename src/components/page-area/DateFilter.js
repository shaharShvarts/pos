import React, { useState, useEffect } from "react";

import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import rows from "./tableData2.json";

const useStyles = makeStyles(() => ({
  root: {
    margin: "0 20px",
  },
}));

const DateFilter = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    startDate &&
      endDate &&
      console.log(
        rows.filter((item) => {
          let dbDate = new Date(
            parseInt(item.date.split("/")[2], 10),
            parseInt(item.date.split("/")[1], 10) - 1,
            parseInt(item.date.split("/")[0], 10)
          );
          return (
            dbDate >= new Date(startDate.setHours(0, 0, 0, 0)) &&
            dbDate <= new Date(endDate.setHours(0, 0, 0, 0))
          );
        })
      );
  }, [startDate, endDate]);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const renderLabel = (date) => {
    const isDate = date instanceof Date && !isNaN(date.valueOf());
    return isDate ? date.toLocaleDateString("he-IL", options) : "";
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        classes={{ root: classes.root }}
        clearable
        value={startDate}
        placeholder="תאריך התחלה"
        onChange={(date) => setStartDate(date)}
        labelFunc={renderLabel}
      />
      <KeyboardDatePicker
        clearable
        value={endDate}
        placeholder="תאריך סיום"
        onChange={(date) => setEndDate(date)}
        labelFunc={renderLabel}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateFilter;
