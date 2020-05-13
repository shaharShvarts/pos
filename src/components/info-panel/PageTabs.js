import React, { useState } from "react";
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
  // const [page, setPage] = useContext(PageContext);
  const [lang, setLang] = useState("he");

  const handleClick = (e) => {
    // const page = e.currentTarget.dataset.page;
    // setPage(page);
    console.log([e.target.name]);
  };

  return (
    // const lang, setLang = [lang, setLang]
    <ThemeProvider theme={theme}>
      <List
        component="nav"
        classes={{ root: classes.root }}
        aria-label="mailbox folders"
      >
        <ListItem
          button
          data-page="Dashboard"
          onClick={handleClick}
          divider
          disableGutters
        >
          <Link
            className="tab-link"
            name="tab-link"
            to={{ pathname: "/", state: { from: "home" } }}
          >
            <ListItemText primary={language[lang].dashboard} />
          </Link>
        </ListItem>

        <ListItem
          button
          data-page="Transactions"
          onClick={handleClick}
          divider
          disableGutters
        >
          <Link className="tab-link" to="/transactions">
            <ListItemText primary={language[lang].transactions} />
          </Link>
        </ListItem>

        <ListItem
          button
          data-page="Reports"
          onClick={handleClick}
          divider
          disableGutters
        >
          <Link className="tab-link" to="/reports">
            <ListItemText primary={language[lang].reports} />
          </Link>
        </ListItem>

        <ListItem
          button
          data-page="Tools"
          onClick={handleClick}
          divider
          disableGutters
        >
          <Link className="tab-link" to="/tools">
            <ListItemText primary={language[lang].tools} />
          </Link>
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

export default PageTabs;
