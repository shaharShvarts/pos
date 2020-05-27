import React from "react";

// material-ui
import unnamed from "../../img/unnamed.png";
import camera from "../../img/camera.png";
import EditIcon from "@material-ui/icons/Edit";
import LanguageIcon from "@material-ui/icons/Language";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "./user-info.css";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: "4px 12px",
    "& .MuiSvgIcon-root": {
      fill: "#636162",
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    color: "#fff",
  },
  image: {
    backgroundImage: `url(${camera})`,
    height: 160,
  },
}));

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div id="user-info">
      <div style={{ direction: "ltr" }}>
        <IconButton
          edge="end"
          className={classes.menuButton}
          color="primary"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div className="user-image">
        <img src={camera} alt="user" />
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
