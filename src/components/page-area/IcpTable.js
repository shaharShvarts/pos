import React, { useState, useEffect } from "react";

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
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

// dependencies
import rows from "./tableData.json";

import tableStyle from "./tableStyle.json";
import { columns } from "./tableStructure";

const useStyles = makeStyles(tableStyle);

const IcpTable = ({ rowCount, pagination }) => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState(rows);
  const [order, setOrder] = useState(true);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      // fetch(data)
      // https://www.youtube.com/watch?v=IYCa1F-OWmk <- useEffect
      // https://www.youtube.com/watch?v=9HFwJ9hrmls <= Real Time Data Sending with SocketIO

      const dataSorted = sortDateTable();
      setData(rowCount ? dataSorted.slice(0, rowCount) : data);
    }
    return () => (mounted = false);
  }, []);

  // functions
  const sortDateTable = () => {
    const dataSorted = data.sort((a, b) => {
      setOrder(!order);

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
    return dataSorted;
  };

  const sortTable = (field) => {
    setOrder(!order);
    const dataSorted = data.sort((a, b) =>
      order ? (a[field] < b[field] ? 1 : -1) : a[field] > b[field] ? 1 : -1
    );
    setData(dataSorted);
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
                  <TableSortLabel active={true} IconComponent={ArrowDropDown} />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
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
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination && (
        <TablePagination
          classes={{ toolbar: classes.toolBar, spacer: classes.spacer }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
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
