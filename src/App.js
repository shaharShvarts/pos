import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/footer";
import TopNav from "./components/top-nav";
import PagesArea from "./components/page-area";
import InfoPanel from "./components/info-panel";

import "normalize.css";
import "./App.css";

const App = () => {
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
