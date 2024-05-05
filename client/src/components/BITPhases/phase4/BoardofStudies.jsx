import React, { useEffect, useState } from "react";
import DataTable from "./tableContainer/DataTable";
import "./tableContainer/DataTable.css";
import { toast } from "react-toastify";

function createData(filename) {
  return { filename };
}

const BoardofStudies = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/bit/boardofstudies"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const {
    nominationData,
    endorsementData,
    issuanceData,
    appointmentData,
    analysisData,
  } = data;

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bit/boardofstudies/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((item) => item.id !== id));
      toast.success("Item Deleted Successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <h1>Board of Studies</h1>
      <div className="board-container">
        <div className="table">
          <DataTable
            onDelete={handleDelete}
            title="Nomination of board"
            rows={nominationData}
          />
        </div>
        <div className="table">
          <DataTable
            onDelete={handleDelete}
            title="Endorsement of Senate"
            rows={endorsementData}
          />
        </div>

        <div className="table">
          <DataTable
            onDelete={handleDelete}
            title="Issuance of Appointment"
            rows={issuanceData}
          />
        </div>
        <div className="table">
          <DataTable
            onDelete={handleDelete}
            title="Appointment duration"
            rows={appointmentData}
          />
        </div>

        <div className="table">
          <DataTable
            onDelete={handleDelete}
            title="Analysis and reporting"
            rows={analysisData}
          />
        </div>
      </div>
    </>
  );
};

export default BoardofStudies;
