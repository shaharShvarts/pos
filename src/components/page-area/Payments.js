import React from "react";

import TextField from "@material-ui/core/TextField";

const Payments = () => {
  return (
    <TextField
      id="standard-basic"
      type="number"
      inputProps={{ min: 1, max: 12 }}
    />
  );
};

export default Payments;
