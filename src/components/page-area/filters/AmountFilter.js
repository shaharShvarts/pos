import React, { useContext, useState } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Input from "@material-ui/core/Input";

const AmountFilter = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { filterByAmount } = useContext(GlobalContext);

  const handleAmount = () => {
    from !== "" && to !== "" && filterByAmount(from, to);
    console.log(from, to);
  };

  return (
    <>
      <Input
        type="number"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input type="number" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={handleAmount} className="action-btn">
        בצע
      </button>
    </>
  );
};

export default AmountFilter;
