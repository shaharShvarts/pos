import React from "react";

// material-ui
import unnamed from "../../img/unnamed.png";
import EditIcon from "@material-ui/icons/Edit";
import LanguageIcon from "@material-ui/icons/Language";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./user-info.css";

const useStyles = makeStyles(() => ({
  button: {
    padding: "4px 12px",
  },
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div id="user-info">
      <div className="user-image">
        <img src={unnamed} alt="user" />
      </div>
      <i className="username">ישראל ישראלי</i>
      <div className="container">
        <Button className={classes.button}>
          <EditIcon /> Edit
        </Button>
        <Button className={classes.button}>
          <LanguageIcon /> Lang
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
