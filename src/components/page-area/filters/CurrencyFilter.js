import React, { useContext, useState, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
      paddingRight: 5,
      width: 100,
    },
  },
}));

const CurrencyFilter = () => {
  const classes = useStyles();
  const [sign, setSign] = useState("");
  const [open, setOpen] = useState(false);
  const { filterByCurrency } = useContext(GlobalContext);

  useEffect(() => {
    sign !== "" && filterByCurrency(sign);
  }, [sign]);

  // const handleCurrency = () => {
  //   sign !== "" && filterByCurrency(sign);
  // };

  // const handelChange = (e) => {
  //   setSign(e.target.value);
  //   console.log(sign);
  //   e.target.value !== "" && filterByCurrency(sign);
  // };

  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={sign}
          onChange={(e) => setSign(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            <em>בחר מטבע</em>
          </MenuItem>
          <MenuItem value={"shekel"}>₪</MenuItem>
          <MenuItem value={"dollar"}>$</MenuItem>
          <MenuItem value={"euro"}>€</MenuItem>
        </Select>
      </FormControl>
      {/* <button onClick={handleCurrency} className="action-btn">
        בצע
      </button> */}
    </>
  );
};

export default CurrencyFilter;
