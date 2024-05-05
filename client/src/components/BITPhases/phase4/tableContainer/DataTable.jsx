import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faDownload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import FormModal from "./FormModal";
import "./DataTable.css";

const DataTable = ({ title, rows, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      {" "}
      <TableContainer sx={{ margin: 1 }} component={Paper}>
        <div className="table-title">
          <Typography sx={{ padding: 2 }} color="inherit" variant="h5">
            {title}
          </Typography>
          <FormModal />

        </div>

        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Download</TableCell>
              <TableCell align="left">File name</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <FontAwesomeIcon
                    className="icon-button download-icon"
                    icon={faDownload}
                  />
                </TableCell>
                <TableCell align="left">{row.filename}</TableCell>

                <TableCell align="center">
                  <FontAwesomeIcon
                    className="icon-button edit-icon"
                    icon={faPenToSquare}
                  />
                </TableCell>
                <TableCell align="center">
                  <FontAwesomeIcon
                    className="icon-button trash-icon"
                    onClick={() => {
                      handleDelete(row._id);
                    }}
                    icon={faTrash}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
