import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Login from "./img/logo.png";
import error from "./img/error.svg";
import ErrorLogin from "./ErrorLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr",
    color: "#d35700",
    "& a": {
      color: "#d35700",
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: "400px",
    height: "100%",
    borderRadius: 0,
    backgroundColor: "transparent",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    "& .MuiFormHelperText-root.Mui-error": {
      marginLeft: 0,
      marginRight: 0,
      position: "relative",
      "&:before": {
        content: `url(${error})`,
        display: "inline-block",
        marginRight: 2,
        verticalAlign: "top",
      },
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#c65101",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#f1914e",
    },
  },
}));

const SignIn = ({ setLogin }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InvalidEmail, setInvalidEmail] = useState(false);
  const [InvalidPassword, setInvalidPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handelEmail = (event) =>
    setEmail(event.target.value, setInvalidEmail(false));
  const handelPassword = (event) =>
    setPassword(event.target.value, setInvalidPassword(false));

  const handleSubmit = (event) => {
    event.preventDefault();

    email === "" && setInvalidEmail(true);
    password === "" && setInvalidPassword(true);

    email === "xx1976xx" && password === "1234"
      ? setLogin(
          sessionStorage.setItem(
            "loginSession",
            "-uZ}~^Y$1X&C&&-uZ}~^Y$1X&C@85"
          ),
          window.location.reload()
        )
      : setLoginFailed(true);
  };

  return (
    <Container component="main" maxWidth="xs" classes={{ root: classes.root }}>
      <CssBaseline />
      <div className={classes.paper}>
        {loginFailed && <ErrorLogin />}
        <Avatar className={classes.avatar}>
          <img src={Login} alt="logo" />
        </Avatar>
        <Typography component="h1" variant="h5">
          מערכת דוחות אשראי
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            // autoFocus
            value={email}
            onChange={handelEmail}
            error={InvalidEmail}
            helperText={InvalidEmail && "Invalid Email Address"}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handelPassword}
            error={InvalidPassword}
            helperText={InvalidPassword && "Invalid A Password"}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
