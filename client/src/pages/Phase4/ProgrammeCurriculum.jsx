import React, { useEffect, useState } from "react";
import DataTable from "../../components/tableContainer/DataTable";
import "../../components/tableContainer/DataTable.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProgrammeCurriculum = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/bit/programcurriculum"
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
  const { workshop1Data, workshop2Data, workshop3Data } = data;

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/bit/programcurriculum/${id}`, {
        method: "DELETE",
      });
      toast.success("Item Deleted Successfully");
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleGet = async (id, downloadname) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/bit/programcurriculum/${id}`,
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
      console.error("Error downloading file:", error);
      toast.error("An error occurred while downloading the file");
    }
  };

  return (
    <>
      <h1>Programme Curriculum</h1>
      <div className="board-container">
        <div className="table">
          <DataTable
            page="programcurriculum"
            onDelete={handleDelete}
            onGet={handleGet}
            title="Workshop 1: Programme Review"
            rows={workshop1Data}
            route="workshop1"
          />
        </div>
        <div className="table">
          <DataTable
            page="programcurriculum"
            onDelete={handleDelete}
            onGet={handleGet}
            title="Workshop 2: Curriculum Structure Design"
            rows={workshop2Data}
            route="workshop2"
          />
        </div>
        <div className="table">
          <DataTable
            page="programcurriculum"
            onDelete={handleDelete}
            onGet={handleGet}
            title="Workshop 3: Course Outline and Course Plan"
            rows={workshop3Data}
            route="workshop3"
          />
        </div>
      </div>
    </>
  );
};

export default ProgrammeCurriculum;
