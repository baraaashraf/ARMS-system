import {
  EndorsementOfSenate2,
  IssuanceOfAppointment2,
  AppointmentDuration2,
} from "../../models/fileupload.model.js";
import { NominationOfBoard2 } from "../../models/members.model.js";
import fs from "fs";
import path from "path";

const getAllData = async (req, res) => {
  try {
    // Fetch data from each model
    const nominationData = await NominationOfBoard2.find();
    const endorsementData = await EndorsementOfSenate2.find();
    const issuanceData = await IssuanceOfAppointment2.find();
    const appointmentData = await AppointmentDuration2.find();

    // Send the data as a response
    res.json({
      nominationData,
      endorsementData,
      issuanceData,
      appointmentData,
    });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addNominationData = async (req, res) => {
  try {
    const { name, company, mobileno, email } = req.body;
    const newData = await NominationOfBoard2.create({
      name,
      company,
      mobileno,
      email,
    });
    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editNominationData = async (req, res) => {
  try {
    const { id } = req.params;
    const { startDate } = req.body;
    const updatedData = await NominationOfBoard.findByIdAndUpdate(
      id,
      { startDate },
      { new: true }
    );
    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
///////////////////////////////////////////////////////////////////////

const addEndorsementData = async (req, res) => {
  try {
    const { startDate, endDate, targetDate } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await EndorsementOfSenate2.create({
      startDate,
      endDate,
      targetDate,
      displayName: file?.originalname,
      file: file?.filename,
    });

    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editEndorsementData = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    const updatedData = await EndorsementOfSenate.findByIdAndUpdate(
      id,
      { filename },
      { new: true }
    );
    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addIssuanceData = async (req, res) => {
  try {
    const { startDate, endDate, targetDate } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await IssuanceOfAppointment2.create({
      startDate,
      endDate,
      targetDate,
      displayName: file?.originalname,
      file: file?.filename,
    });

    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editIssuanceData = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    const updatedData = await IssuanceOfAppointment.findByIdAndUpdate(
      id,
      { filename },
      { new: true }
    );
    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addAppointmentData = async (req, res) => {
  try {
    const { startDate, endDate, targetDate } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await AppointmentDuration2.create({
      startDate,
      endDate,
      targetDate,
      displayName: file?.originalname,
      file: file?.filename,
    });

    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editAppointmentData = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    const updatedData = await AppointmentDuration.findByIdAndUpdate(
      id,
      { filename },
      { new: true }
    );
    res.json(updatedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const collections = [
      NominationOfBoard2,
      AppointmentDuration2,
      IssuanceOfAppointment2,
      EndorsementOfSenate2,
    ];

    let deleted = false;
    for (const collection of collections) {
      const document = await collection.findById(id);
      if (document) {
        if (collection === NominationOfBoard2) {
          await collection.findByIdAndDelete(id);
          return res.json({ message: "Data deleted successfully" });
        } else {
          const filePath = path.join("./uploads", document.file);
          console.log("document.file", document.file);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          } else {
            console.log(filePath, "cannot find");
          }
          await collection.findByIdAndDelete(id);

          deleted = true;
          break;
        }
      }

      if (deleted) {
        res.status(200).json({ message: "Data deleted successfully" });
      }
    }
    res.status(404).json({ message: "Document not found" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFileById = async (req, res) => {
  try {
    const { id } = req.params;
    const collections = [
      NominationOfBoard2,
      EndorsementOfSenate2,
      IssuanceOfAppointment2,
      AppointmentDuration2,
    ];

    let fileFound = false;
    for (const collection of collections) {
      const document = await collection.findById(id);
      if (document) {
        const filePath = path.join("./uploads", document.file);
        console.log("document.file", document.file);
        if (fs.existsSync(filePath)) {
          console.log(filePath, "File is here");
          res.setHeader(
            "Content-Disposition",
            `attachment; filename=${document.file}`
          );
          res.setHeader("Content-Type", "application/octet-stream");

          // Stream the file to the response
          const fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          fileFound = true;
          break;
        } else {
          console.log(filePath, "cannot find ");
          res.status(404).json({ message: "File Not Found" });
          return; // Exit the function if file is not found
        }
      }
    }

    if (!fileFound) {
      res.status(404).json({ message: "File Not Found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  //ADD
  addAppointmentData,
  getAllData,
  addEndorsementData,
  addIssuanceData,
  addNominationData,
  //EDIT
  editEndorsementData,
  editAppointmentData,
  editNominationData,
  editIssuanceData,
  //////////////////////
  deleteDataById,
  getFileById,
};
