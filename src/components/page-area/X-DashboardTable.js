import React from "react";

// material-ui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableSortLabel from "@material-ui/core/TableSortLabel";

// dependencies
import rows from "./dashboardData.json";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#357376",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#dadada",
    },
    "&:hover": {
      backgroundColor: "#cacaca",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const DashboardTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="dashboard table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <TableSortLabel
                active={true}
                direction={"asc"}
                onClick={console.log("dashboard111")}
              />
              תאריך
            </StyledTableCell>
            <StyledTableCell align="center">סכום</StyledTableCell>
            <StyledTableCell align="center">מטבע</StyledTableCell>
            <StyledTableCell align="center">תשלומים</StyledTableCell>
            <StyledTableCell align="center">עמלה</StyledTableCell>
            <StyledTableCell align="center">תמורה</StyledTableCell>
            <StyledTableCell align="center">כרטיס</StyledTableCell>
            <StyledTableCell align="center">מספר כרטיס</StyledTableCell>
            <StyledTableCell align="center">מספר אישור</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">
                {row.amount.toLocaleString("he-IL", {
                  minimumFractionDigits: 2,
                })}
              </StyledTableCell>
              <StyledTableCell align="center">{row.currency}</StyledTableCell>
              <StyledTableCell align="center">{row.payments}</StyledTableCell>
              <StyledTableCell align="center">
                {row.commissions}
              </StyledTableCell>
              <StyledTableCell align="center">{row.exchange}</StyledTableCell>
              <StyledTableCell align="center">{row.card}</StyledTableCell>
              <StyledTableCell align="center">
                {row.cardNumber + "*".repeat(8)}
              </StyledTableCell>
              <StyledTableCell align="center">{row.approval}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
