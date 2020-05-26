import React, { useState, useContext } from "react";

import DateFnsUtils from "@date-io/date-fns";

// material-ui
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { GlobalContext } from "../../context/GlobalState";

const DateFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const { filterByDate } = useContext(GlobalContext);

  const handleDate = () => {
    startDate && endDate && filterByDate(startDate, endDate);
  };

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
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={startDate}
          placeholder="תאריך התחלה"
          onChange={(date) => setStartDate(date)}
          autoOk={true}
          labelFunc={renderLabel}
          variant="inline"
          invalidDateMessage="מבנה תאריך לא תקין"
        />
        <KeyboardDatePicker
          value={endDate}
          placeholder="תאריך סיום"
          onChange={(date) => setEndDate(date)}
          autoOk={true}
          labelFunc={renderLabel}
          variant="inline"
          invalidDateMessage="מבנה תאריך לא תקין"
        />
      </MuiPickersUtilsProvider>
      <button onClick={handleDate} className="action-btn">
        בצע
      </button>
    </>
  );
};

export default DateFilter;
