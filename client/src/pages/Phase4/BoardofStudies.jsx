import React, { useEffect, useState } from "react";
import DataTable from "../../components/tableContainer/DataTable";
import "../../components/tableContainer/DataTable.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        setError(err.message);
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
    NominationOfBoard,
    EndorsementOfSenate,
    IssuanceOfAppointment,
    AppointmentDuration,
    AnalysisAndReporting,
  } = data;

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bit/boardofstudies/${id}`, {
        method: "DELETE",
      });
      toast.success("Item Deleted Successfully");
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleDownload = async (id, downloadname) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bit/boardofstudies/download/${id}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const filename = downloadname;
        const blob = await response.blob();
        const link = document.createElement("a");

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();

        toast.success("File downloaded successfully");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || response.statusText);
      }
    } catch (error) {
      toast.error(err?.data?.message || err.error);
      console.error("Error downloading file:", error);
    }
  };

  return (
    <>
      <h1>Board of Studies</h1>
      <div className="board-container">
        <div className="table">
          <DataTable
            page="boardofstudies"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Nomination of members"
            rows={NominationOfBoard}
            route="nominationdata"
          />
        </div>
        <div className="table">
          <DataTable
            page="boardofstudies"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Endorsement of Senate"
            rows={EndorsementOfSenate}
            route="endorsementdata"
          />
        </div>

        <div className="table">
          <DataTable
            page="boardofstudies"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Issuance of Appointment"
            rows={IssuanceOfAppointment}
            route="issuancedata"
          />
        </div>
        <div className="table">
          <DataTable
            page="boardofstudies"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Appointment duration"
            rows={AppointmentDuration}
            route="appointmentData"
          />
        </div>

        <div className="table">
          <DataTable
            page="boardofstudies"
            onDelete={handleDelete}
            onDownload={handleDownload}
            title="Analysis and reporting"
            rows={AnalysisAndReporting}
            route="analysisdata"
          />
        </div>
      </div>
    </>
  );
};

export default BoardofStudies;
