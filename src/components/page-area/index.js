import Tools from "./Tools";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import { Route, Switch, Redirect } from "react-router-dom";

import "./index.css";

const PagesArea = () => {
  const [mounting, setMounting] = useState(false);

  useEffect(() => {
    setMounting(true);
    return () => setMounting(false);
  }, []);

  return (
    <div id="pages-area">
      {mounting === true && (
        <Redirect
          to={{
            pathname: "/",
            title: "שולחן עבודה",
          }}
        />
      )}
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/transactions" exact component={Transactions} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/tools" exact component={Tools} />
      </Switch>
    </div>
  );
};

export default PagesArea;
