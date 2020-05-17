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
    margin: theme.spacing(1),
    minWidth: 120,
    flexDirection: "row",
    "& .MuiSelect-icon": {
      right: "calc(100% - 24px)",
    },
    "& .MuiSelect-select": {
      paddingLeft: 24,
      paddingRight: 0,
      width: 100,
    },
  },
}));

const TableFilter = () => {
  const classes = useStyles();
  const [select, setSelect] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="wrap">
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={select}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>None</em>
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
      <div className="wrap">
        {select == "date" && <DateFilter />}
        {select == "amount" && <AmountFilter />}
        {select == "currency" && <Currency />}
        {select == "exchange" && <Exchange />}
        {select == "card" && <Card />}
        {select == "payments" && <Payments />}
        {select == "cardNumber" && <CardNumber />}
        {select == "approval" && <Approval />}
      </div>
    </div>
  );
};
export default TableFilter;
