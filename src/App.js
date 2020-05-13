import React from "react";
import { HashRouter } from "react-router-dom";

import Footer from "./components/footer";
import TopNav from "./components/top-nav";
import PagesArea from "./components/page-area";
import InfoPanel from "./components/info-panel";

import "normalize.css";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <main>
        <InfoPanel />
        <TopNav />
        <PagesArea />
        <Footer />
      </main>
    </HashRouter>
  );
};

export default App;
