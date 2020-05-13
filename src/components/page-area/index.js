import Tools from "./Tools";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import React from "react";
import Transactions from "./Transactions";
import { Route, Switch } from "react-router-dom";

import "./index.css";

const PagesArea = () => {
  return (
    <div id="pages-area">
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
