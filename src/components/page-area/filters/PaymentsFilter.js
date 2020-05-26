import React, { useContext, useState, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Input from "@material-ui/core/Input";

const PaymentsFilter = () => {
  const [paymentsNum, setPaymentsNum] = useState("");
  const { filterByPayments, resetTable } = useContext(GlobalContext);

  useEffect(() => {
    resetTable();
    paymentsNum !== "" && filterByPayments(parseInt(paymentsNum, 10));
  }, [paymentsNum]);

  return (
    <Input
      type="number"
      value={paymentsNum}
      onChange={(e) => setPaymentsNum(e.target.value)}
    />
  );
};

export default PaymentsFilter;
