import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormModal.css";

const Form2 = ({ route, onClose, page }) => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    targetDate: "",
  });

  const [file, setFile] = useState(null); // State to handle file

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("startDate", formData.startDate);
    formDataObj.append("endDate", formData.endDate);
    formDataObj.append("targetDate", formData.targetDate);
    formDataObj.append("file", file); // Append selected file

    fetch(`http://localhost:5000/api/bit/${page}/${route}`, {
      method: "POST",
      body: formDataObj,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.error("Please fill all elements");
          return;
        }
        console.log("Success:", data);
        toast.success("Item Added Successfully");
        onClose();
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(err?.data?.message || err.error);
      });
  };

  return (
    <form
      encType="multipart/form-data"
      className="modal-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="startDate">Start Date:</label>
      <br />
      <input
        type="date"
        id="startDate"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="endDate">End Date:</label>
      <br />
      <input
        type="date"
        id="endDate"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="startDate">Target Date:</label>
      <br />
      <input
        type="date"
        id="targetDate"
        name="targetDate"
        value={formData.targetDate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="file">PDF File:</label>
      <br />
      <input
        type="file"
        accept=".doc,.docx,.pdf"
        id="file"
        name="file"
        onChange={handleFileChange} // Use separate handler for file change
      />
      <br />
      <input id="form-submit-button" type="submit" value="Submit" />
    </form>
  );
};

export default Form2;
