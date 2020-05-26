import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ExportCSV from "./ExportCSV";

import { GlobalContext } from "../context/GlobalState";

import DateFilter from "./filters/DateFilter";
import AmountFilter from "./filters/AmountFilter";
import CurrencyFilter from "./filters/CurrencyFilter";
import ExchangeFilter from "./filters/ExchangeFilter";
import CardFilter from "./filters/CardFilter";
import PaymentsFilter from "./filters/PaymentsFilter";
import CardNumberFilter from "./filters/CardNumberFilter";
import ApprovalFilter from "./filters/ApprovalFilter";

import "./tableFilter.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    margin: theme.spacing(1),
    minWidth: 120,
    "& .MuiSelect-icon": {
      right: "calc(100% - 24px)",
    },
    "& .MuiSelect-select": {
      paddingLeft: 24,
      paddingRight: 5,
      width: 100,
    },
  },
  margin: {
    "& div": {
      margin: "0 10px",
    },
  },
}));

const TableFilter = () => {
  const classes = useStyles();
  const [option, setOption] = useState("");
  const [open, setOpen] = useState(false);
  const { transactions, resetTable } = useContext(GlobalContext);

  useEffect(() => {
    resetTable();
  }, [option]);

  return (
    <>
      <b>סנן לפי : </b>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={option}
          onChange={(e) => setOption(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            <em>ללא סינון</em>
          </MenuItem>
          <MenuItem value={"date"}>תאריך</MenuItem>
          <MenuItem value={"amount"}>סכום</MenuItem>
          <MenuItem value={"currency"}>מטבע</MenuItem>
          <MenuItem value={"exchange"}>תמורה</MenuItem>
          <MenuItem value={"card"}>כרטיס</MenuItem>
          <MenuItem value={"payments"}>תשלומים</MenuItem>
          <MenuItem value={"cardNumber"}>מספר כרטיס</MenuItem>
          <MenuItem value={"approval"}>מספר אישור</MenuItem>
        </Select>
      </FormControl>
      <div className={classes.margin}>
        {option === "date" && <DateFilter />}
        {option === "amount" && <AmountFilter />}
        {option === "currency" && <CurrencyFilter />}
        {option === "exchange" && <ExchangeFilter />}
        {option === "card" && <CardFilter />}
        {option === "payments" && <PaymentsFilter />}
        {option === "cardNumber" && <CardNumberFilter />}
        {option === "approval" && <ApprovalFilter />}
      </div>
      <ExportCSV
        className={classes.button}
        csvData={transactions}
        fileName={"test"}
      />
      {/* <ExportReactCSV csvData={this.state.customers} fileName={this.state.fileName} /> */}
    </>
  );
};
export default TableFilter;
