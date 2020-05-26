import React, { useContext, useState } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Input from "@material-ui/core/Input";

const ExchangeFilter = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { filterByExchange } = useContext(GlobalContext);

  const handleExchange = () => {
    from !== "" && to !== "" && filterByExchange(from, to);
  };

  return (
    <>
      <Input
        type="number"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <Input type="number" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={handleExchange} className="action-btn">
        בצע
      </button>
    </>
  );
};

export default ExchangeFilter;
