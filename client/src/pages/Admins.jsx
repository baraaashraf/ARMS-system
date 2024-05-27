import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Admins = () => {
  const [admins, setAdmins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminsData = await fetch(
          "http://localhost:5000/api/users/admins"
        );
        if (!adminsData.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await adminsData.json();
        setAdmins(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [admins]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  async function handleDeleteAdmin(id) {
    try {
      const response = await fetch(`http://localhost:5000/api/users/admins/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Failed to delete admin");
        throw new Error("Failed to delete admin");
      }
      toast.success("Admin deleted successfully");
    } catch (error) {
      console.error("Error deleting admin:", error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <TableContainer>
        <Table component={Paper} size="small" sx={{ borderRadius: "10px" }}>
          <TableHead sx={{ backgroundColor: "#00928f", borderRadius: "10px" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Created At</TableCell>
              <TableCell align="center">Updated At</TableCell>
              <TableCell align="center">Identity No</TableCell>
              <TableCell align="center">Mobile No</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  {row.createdAt.split("T")[0]}
                </TableCell>
                <TableCell align="center">
                  {row.updatedAt.split("T")[0]}
                </TableCell>
                <TableCell align="center">
                  {row.identityCardOrPassportNo || "Unavailable"}
                </TableCell>
                <TableCell align="center">
                  {row.mobile || "Unavailable"}
                </TableCell>
                <TableCell align="center">
                  <FontAwesomeIcon
                    className="fa-lg trash-icon icon-button"
                    onClick={() => {
                      handleDeleteAdmin(row._id);
                    }}
                    icon={faTrash}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Admins;
