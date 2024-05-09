import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { faPlus,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DataTable.css";
import "./FormModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxWidth: 800,
  minWidth: 200,
  height: "55%",
  bgcolor: "background.paper",
  border: "0px solid #000",
  borderRadius: "10px",
  boxShadow: 15,
  p: 4,
};

const FormModal = ({ title, route }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    filename: "",
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

    fetch(`http://localhost:5000/api/bit/boardofstudies/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message){
          toast.error("\nPlease fill all elements");
          return;
        }
        console.log("Success:", data);
        toast.success("Item Added Successfully");
        handleClose();

      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(err?.data?.message || err.error);
      });
  };

  return (
    <div>
      <Button sx={{ color: "black" }} onClick={handleOpen}>
        <FontAwesomeIcon className="icon-button add-icon" icon={faPlus} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="table-title">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add {title.toLowerCase()} member
            </Typography>
            <button onClick={handleClose}><FontAwesomeIcon icon={faCircleXmark} /></button>
          </div>

          <Typography
            className="table-form-container"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <form onSubmit={handleSubmit}>
              <label htmlFor="filename">File name:</label>
              <br />
              <input
                type="text"
                id="filename"
                name="filename"
                value={formData.filename}
                onChange={handleChange}
              />

              <br />
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
                onChange={handleChange}a
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
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
