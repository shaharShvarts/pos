import React, { useEffect, useState } from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useLocation } from "react-router-dom";

import "./index.css";

const TopNav = () => {
  const location = useLocation();
  console.log(location);
  const [labelPage, setLabelPage] = useState("");

  useEffect(() => {
    let mounting = true;

    if (mounting) {
      let eee = crrPage();
      setLabelPage(eee);
    }

    return () => (mounting = false);
  }, [labelPage]);

  const crrPage = () => {
    let position = window.location.href.lastIndexOf("/");
    let page = window.location.href.slice(position);

    switch (page) {
      case "":
        return "שולחן עבודה";
      case "/transactions":
        return "עסקאות";
      case "/reports":
        return "דוחות";
      case "/tools":
        return "כלים";
      default:
        break;
    }
  };

  return (
    <div id="top-nav">
      <header className="nav-header">
        <DashboardIcon />
        <span>{labelPage}</span>
      </header>
    </div>
  );
};

export default TopNav;
