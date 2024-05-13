import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../FormModal.css";
const Form1 = ({ route, onClose,page }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    mobileno: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(route);

    fetch(`http://localhost:5000/api/bit/${page}/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          toast.error("\nPlease fill all elements");
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
    <form className="modal-form" onSubmit={handleSubmit}>
    
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <label htmlFor="position">Position:</label>
      <br />
      <input
        type="text"
        id="position"
        name="position"
        value={formData.position}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="company">Company/Institution:</label>
      <br />
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        a
      />
      <br />
      <label htmlFor="mobileno">Mobile No:</label>
      <br />
      <input
        type="text"
        id="mobileno"
        name="mobileno"
        value={formData.mobileno}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input id="form-submit-button" type="submit" value="Submit" />
    </form>
  );
};

export default Form1;
