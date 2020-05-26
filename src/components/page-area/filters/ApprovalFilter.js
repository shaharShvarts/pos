import React, { useContext, useState, useEffect } from "react";

import { GlobalContext } from "../../context/GlobalState";
import Input from "@material-ui/core/Input";

const ApprovalFilter = () => {
  const [approvalNum, setApproval] = useState("");
  const { filterByApproval, resetTable } = useContext(GlobalContext);

  useEffect(() => {
    resetTable();
    approvalNum !== "" && filterByApproval(parseInt(approvalNum, 10));
  }, [approvalNum]);

  return (
    <Input
      type="number"
      value={approvalNum}
      onChange={(e) => setApproval(e.target.value)}
    />
  );
};

export default ApprovalFilter;
