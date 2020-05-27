import React, { useState, useEffect, useContext } from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AssessmentIcon from "@material-ui/icons/Assessment";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import { GlobalContext } from "../context/GlobalState";

// dependencies
import "./page-tabs.css";
import language from "./LanguageTabs.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "transparent",
    color: "#66A8A9",
    textAlign: "center",
    "& div": {
      justifyContent: "center",
      color: "#fff",
    },
    "& .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      button: {
        "&:hover": {
          color: "#fff",
          backgroundColor: "#6ba8a9",
        },
      },
    },
  },
});

const PageTabs = () => {
  const classes = useStyles();
  const [lang, setLang] = useState("he");
  const [active, setActive] = useState("dashboard");

  const { resetTable } = useContext(GlobalContext);

  useEffect(() => {
    resetTable();
  }, [active]);

  const changeLanguage = () => {
    setLang("");
  };

  const logout = () => {
    setActive("reports");
    sessionStorage.removeItem("loginSession");
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <List
        component="nav"
        classes={{ root: classes.root }}
        aria-label="mailbox folders"
      >
        <ListItem
          button
          divider
          disableGutters
          selected={active == "dashboard"}
          onClick={() => setActive("dashboard")}
          component={Link}
          to={{
            pathname: "/",
            title: "שולחן עבודה",
            type: "dashboard",
          }}
        >
          <div className="list-wrap">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={language[lang].dashboard} />
          </div>
        </ListItem>

        <ListItem
          button
          divider
          disableGutters
          selected={active == "transactions"}
          onClick={() => setActive("transactions")}
          component={Link}
          to={{
            pathname: "/transactions",
            title: "עסקאות",
            type: "transactions",
          }}
        >
          <div className="list-wrap">
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={language[lang].transactions} />
          </div>
        </ListItem>

        <ListItem
          button
          divider
          disableGutters
          selected={active == "reports"}
          onClick={() => setActive("reports")}
          component={Link}
          to={{
            pathname: "/reports",
            title: "דוחות",
            type: "reports",
          }}
        >
          <div className="list-wrap">
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary={language[lang].reports} />
          </div>
        </ListItem>

        <ListItem
          button
          divider
          disableGutters
          selected={active == "logout"}
          onClick={logout}
          component={Link}
          to={{
            pathname: "/",
            title: "התנתק",
            type: "logout",
          }}
        >
          <div className="list-wrap">
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary={language[lang].logout} />
          </div>
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

export default PageTabs;
