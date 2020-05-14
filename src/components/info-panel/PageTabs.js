import React, { useState, useEffect } from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
      textAlign: "center",
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

  useEffect(() => {
    setLang("he");
    if (lang) {
      console.log("lang", lang);
    }
    return () => {
      setLang("");
    };
  }, [lang]);

  return (
    <ThemeProvider theme={theme}>
      <List
        component="nav"
        classes={{ root: classes.root }}
        aria-label="mailbox folders"
      >
        <ListItem button divider disableGutters>
          <Link
            className="tab-link"
            name="tab-link"
            to={{
              pathname: "/",
              title: "שולחן עבודה",
            }}
          >
            <ListItemText primary={language[lang].dashboard} />
          </Link>
        </ListItem>

        <ListItem button divider disableGutters>
          <Link
            className="tab-link"
            to={{
              pathname: "/transactions",
              title: "עסקאות",
            }}
          >
            <ListItemText primary={language[lang].transactions} />
          </Link>
        </ListItem>

        <ListItem button divider disableGutters>
          <Link
            className="tab-link"
            to={{
              pathname: "/reports",
              title: "דוחות",
            }}
          >
            <ListItemText primary={language[lang].reports} />
          </Link>
        </ListItem>

        <ListItem button divider disableGutters>
          <Link
            className="tab-link"
            to={{
              pathname: "/tools",
              title: "כלים",
            }}
          >
            <ListItemText primary={language[lang].tools} />
          </Link>
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

export default PageTabs;
