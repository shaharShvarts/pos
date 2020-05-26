import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const BadgeOverlap = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge color="secondary" overlap="circle" badgeContent="4">
        <NotificationsIcon />
      </Badge>
    </div>
  );
};

export default BadgeOverlap;
