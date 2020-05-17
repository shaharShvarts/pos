import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const useStyles = makeStyles(() => ({
  root: {
    // margin: "0 50px",
  },
}));

const DateFilter = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        minDate={new Date()}
        format="dd/MM/yyyy"
        labelFunc={renderLabel}
      />
      <KeyboardDatePicker
        clearable
        value={endDate}
        placeholder="תאריך סיום"
        onChange={(date) => setEndDate(date)}
        minDate={new Date()}
        format="dd/MM/yyyy"
        labelFunc={renderLabel}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateFilter;
