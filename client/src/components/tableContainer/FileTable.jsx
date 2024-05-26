import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ConfirmationModal from "../Modals/ConfirmationModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faDownload } from "@fortawesome/free-solid-svg-icons";
import EditFormModal from "../Modals/EditFormModal.jsx";

const FileTable = ({
  userInfo,
  rows,
  page,
  route,
  title,
  handleDelete,
  handleGet,
}) => {
  return (
    <Table sx={{ minWidth: 250 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Download</TableCell>
          <TableCell align="center">File Name</TableCell>
          {userInfo.role === "admin" && (
            <>
              <TableCell align="center">Delete</TableCell>{" "}
            </>
          )}
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
            {userInfo.role === "admin" && (
              <>
                <TableCell align="center">
                  <ConfirmationModal
                    classIcon="trash-icon"
                    icon={faTrash}
                    onConfirm={() => {
                      handleDelete(row._id);
                    }}
                  />
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FileTable;
