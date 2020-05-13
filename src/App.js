import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
// import { createBrowserHistory } from "history";

import Footer from "./components/footer";
import TopNav from "./components/top-nav";
import PagesArea from "./components/page-area";
import InfoPanel from "./components/info-panel";

import "normalize.css";
import "./App.css";

// import { PageProvider } from "./PageContext";

const App = () => {
  //   let history = createBrowserHistory();
  // useEffect(() => {
  //   if (window.performance) {
  //     console.info("window.performance works fine on this browser");
  //   }

  //   if (performance.navigation.type == 1) {
  //     console.info("This page is reloaded");
  //     // const stateObj = { foo: "bar" };
  //     // window.history.replaceState(stateObj, "", "/tools");
  //     // history.push("/");
  //     history.createHref("/");
  //     // console.log(history.createHref("/"));
  //   } else {
  //     console.info("This page is not reloaded");
  //   }

  //   // window.addEventListener("beforeunload", onUnload);
  //   console.log("onUnload");
  //   return () => {
  //     // window.removeEventListener("beforeunload", offUnload);
  //     console.log("offUnload");
  //   };
  // }, []);

  // const onUnload = () => {
  //   console.log("onUnload");
  // };

  // const offUnload = () => {
  //   console.log("offUnload");
  // };

  return (
    <Router>
      <main>
        <InfoPanel />
        <TopNav />
        <PagesArea />
        <Footer />
      </main>
    </Router>
  );
};

export default App;
