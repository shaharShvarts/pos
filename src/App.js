import React, { useState } from "react";
import { HashRouter } from "react-router-dom";

import Footer from "./components/footer";
import TopNav from "./components/top-nav";
import PagesArea from "./components/page-area";
import InfoPanel from "./components/info-panel";

import { GlobalProvider } from "./components/context/GlobalState";

import SignIn from "./login";

import "normalize.css";
import "./App.css";

const App = () => {
  const [login, setLogin] = useState(
    sessionStorage.getItem("loginSession") || ""
  );

  return login ? (
    <HashRouter basename="/">
      <GlobalProvider>
        <main>
          <InfoPanel />
          <TopNav />
          <PagesArea />
          <Footer />
        </main>
      </GlobalProvider>
    </HashRouter>
  ) : (
    <SignIn setLogin={setLogin} />
  );
};

export default App;
