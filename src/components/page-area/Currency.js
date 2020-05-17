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
      paddingRight: 0,
      width: 100,
    },
  },
}));

const Currency = () => {
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
        <MenuItem value={"shekel"}>₪</MenuItem>
        <MenuItem value={"dollar"}>$</MenuItem>
        <MenuItem value={"euro"}>€</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Currency;
