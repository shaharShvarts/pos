import React, { useState, useContext, useEffect } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ErrorIcon from "@material-ui/icons/Error";
import "./icpTable.css";

// dependencies
import { GlobalContext } from "../context/GlobalState";

import tableStyle from "./tableStyle.json";
import { columns } from "./tableStructure";

const useStyles = makeStyles(tableStyle);

const IcpTable = ({ rowCount = 0, pagination }) => {
  const { transactions, filterByRecently } = useContext(GlobalContext);

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [data, setData] = useState(transactions);
  const [order, setOrder] = useState(true);

  useEffect(() => {
    rowCount > 0 && filterByRecently(rowCount);
  }, []);

  // functions
  const sortDateTable = () => {
    setOrder(!order);
    transactions.sort((a, b) => {
      const x = new Date(
        a.date.split("/")[2],
        a.date.split("/")[1],
        a.date.split("/")[0]
      );

      const y = new Date(
        b.date.split("/")[2],
        b.date.split("/")[1],
        b.date.split("/")[0]
      );

      return order ? (x < y ? 1 : -1) : x > y ? 1 : -1;
    });
  };

  const sortTable = (field) => {
    setOrder(!order);
    transactions.sort((a, b) =>
      order ? (a[field] < b[field] ? 1 : -1) : a[field] > b[field] ? 1 : -1
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.wrapTable}>
      <TableContainer classes={{ root: classes.tableContainer }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  classes={{ root: classes.tableHeader }}
                  key={index}
                  align={column.align}
                  onClick={() => {
                    column.id === "date"
                      ? sortDateTable()
                      : sortTable(column.id);
                  }}
                >
                  {column.label}
                  <TableSortLabel
                    active={true}
                    direction="desc"
                    IconComponent={ArrowDropDownIcon}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    classes={{ root: classes.tableRow }}
                  >
                    {columns.map((column, index) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={index} align={column.align}>
                          {column.format && typeof value === "number" ? (
                            <div>{column.format(value)}</div>
                          ) : (
                            <div
                              className={
                                value === "success"
                                  ? classes.success
                                  : value === "failed"
                                  ? classes.failed
                                  : ""
                              }
                            >
                              {value}
                            </div>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}

            {transactions.length === 0 && (
              <TableRow>
                <TableCell className="empty-data" colspan="100%">
                  <span>אין נתונים להצגה</span>
                  <ErrorIcon />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination && transactions.length > 0 && (
        <TablePagination
          classes={{ toolbar: classes.toolBar, spacer: classes.spacer }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          color="primary"
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
};

export default IcpTable;
