import Tools from "./Tools";
import Reports from "./Reports";
import Dashboard from "./Dashboard";
import React, { useEffect } from "react";
import Transactions from "./Transactions";
import { Switch, Route } from "react-router-dom";

// import { PageContext } from "../../PageContext";

import "./index.css";

const PagesArea = () => {
  // useEffect(() => {
  //   if (window.performance) {
  //     console.info("window.performance works fine on this browser");
  //   }

  //   if (performance.navigation.type == 1) {
  //     console.info("This page is reloaded");
  //     // const stateObj = { foo: "bar" };
  //     // window.history.replaceState(stateObj, "", "/tools")
  //   } else {
  //     console.info("This page is not reloaded");
  //   }

  //   // window.addEventListener("beforeunload", onUnload);
  //   console.log("onUnload");
  //   return () => <Redirect to="/" />;
  //   // window.removeEventListener("beforeunload", offUnload);
  // }, []);

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
