import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import FormModal from "./FormModal";
import "./DataTable.css";

const DataTable = ({ title, rows, route, onDelete, onGet,page }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleGet = (id, downlaodname) => {
    onGet(id, downlaodname);
  };
  return (
    <>
      {" "}
      <TableContainer sx={{ margin: 1 }} component={Paper}>
        <div className="table-title">
          <Typography sx={{ padding: 2 }} color="inherit" variant="h5">
            {title}
          </Typography>
          <FormModal page={page} title={title} route={route} />
        </div>

        {route === "nominationdata" ? (
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">company</TableCell>
                <TableCell align="center">Mobile No</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.name}</TableCell>

                  <TableCell align="center">{row.company}</TableCell>
                  <TableCell align="center">{row.mobileno}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">
                    <FontAwesomeIcon
                      className="icon-button fa-lg edit-icon"
                      icon={faPenToSquare}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FontAwesomeIcon
                      className="icon-button fa-lg trash-icon"
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
        ) : (
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Download</TableCell>
                <TableCell align="center">File Name</TableCell>
                <TableCell align="center">start date</TableCell>
                <TableCell align="center">end date</TableCell>
                <TableCell align="center">target date</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    {" "}
                    <FontAwesomeIcon
                      onClick={() => {
                        handleGet(row._id, row.displayName);
                      }}
                      className="icon-button fa-lg edit-icon"
                      icon={faDownload}
                    />
                  </TableCell>
                  <TableCell align="center">{row.displayName}</TableCell>
                  <TableCell align="center">{row.startDate}</TableCell>
                  <TableCell align="center">{row.endDate}</TableCell>
                  <TableCell align="center">{row.targetDate}</TableCell>
                  <TableCell align="center">
                    <FontAwesomeIcon
                      className="icon-button fa-lg edit-icon"
                      icon={faPenToSquare}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <FontAwesomeIcon
                      className="icon-button fa-lg trash-icon"
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
        )}
      </TableContainer>
    </>
  );
};

export default DataTable;
