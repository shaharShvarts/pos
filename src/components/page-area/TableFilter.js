import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import DateFilter from "./DateFilter";
import AmountFilter from "./AmountFilter";
import Currency from "./Currency";
import Exchange from "./Exchange";
import Card from "./Card";
import Payments from "./Payments";
import CardNumber from "./CardNumber";
import Approval from "./Approval";

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
  const [option, setOption] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
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
          <em>בחר סינון</em>
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
      <div className={classes.margin}>
        {option === "date" && <DateFilter />}
        {option === "amount" && <AmountFilter />}
        {option === "currency" && <Currency />}
        {option === "exchange" && <Exchange />}
        {option === "card" && <Card />}
        {option === "payments" && <Payments />}
        {option === "cardNumber" && <CardNumber />}
        {option === "approval" && <Approval />}
      </div>
    </FormControl>
  );
};
export default TableFilter;
