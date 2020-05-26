import React from "react";
import "./ErrorLogin.css";

const ErrorLogin = () => {
  return (
    <div className="error-notice">
      <div className="login-status-message">שם משתמש או סיסמא לא נכונים</div>
      <span className="login-status-icon"></span>
    </div>
  );
};

export default ErrorLogin;
