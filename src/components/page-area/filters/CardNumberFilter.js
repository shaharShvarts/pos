import React, { useContext, useState, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Input from "@material-ui/core/Input";

const CardNumberFilter = () => {
  const [cardNum, setCardNum] = useState("");
  const { filterByCardNumber, resetTable } = useContext(GlobalContext);

  useEffect(() => {
    resetTable();
    cardNum !== "" && filterByCardNumber(parseInt(cardNum, 10));
  }, [cardNum]);

  return (
    <Input
      type="number"
      value={cardNum}
      onChange={(e) => setCardNum(e.target.value)}
    />
  );
};

export default CardNumberFilter;
