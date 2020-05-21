import React from "react";

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

const Currency = () => {
  const classes = useStyles();
  const [select, setSelect] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <FormControl className={classes.formControl}>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={select}
        onChange={(e) => setSelect(e.target.value)}
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
  );
};

export default Currency;
