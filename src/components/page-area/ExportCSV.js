import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(() => ({
  button: {
    direction: "ltr",
    marginRight: "auto",
    backgroundColor: "#1A5C38",
  },
}));

const ExportCSV = ({ csvData, fileName }) => {
  const classes = useStyles();
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="small"
      startIcon={<SaveIcon />}
      onClick={(e) => exportToCSV(csvData, fileName)}
    >
      Excel
    </Button>
  );
};

export default ExportCSV;
