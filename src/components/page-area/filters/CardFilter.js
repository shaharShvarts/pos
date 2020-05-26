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

const CardFilter = () => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [open, setOpen] = useState(false);
  const { filterByCard } = useContext(GlobalContext);

  useEffect(() => {
    type !== "" && filterByCard(type);
  }, [type]);

  // const handleCard = () => {
  //   type !== "" && filterByCard(type);
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
          value={type}
          onChange={(e) => setType(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">
            <em>בחר סוג כרטיס</em>
          </MenuItem>
          <MenuItem value={"AMERICAN_EXPRESS"}>אמקס</MenuItem>
          <MenuItem value={"VISA"}>ויזה</MenuItem>
          <MenuItem value={"MASTER_CARD"}>מאסטר כארד</MenuItem>
          <MenuItem value={"DINERS_CLUB"}>דיינרס</MenuItem>
        </Select>
      </FormControl>
      {/* <button onClick={handleCard} className="action-btn">
        בצע
      </button> */}
    </>
  );
};

export default CardFilter;
