import {
  NominationOfBoard,
  EndorsementOfSenate,
  IssuanceOfAppointment,
  AppointmentDuration,
  AnalysisAndReporting,
} from "../models/boardOfStudies.model.js";

const getAllData = async (req, res) => {
  try {
    // Fetch data from each model
    const nominationData = await NominationOfBoard.find();
    const endorsementData = await EndorsementOfSenate.find();
    const issuanceData = await IssuanceOfAppointment.find();
    const appointmentData = await AppointmentDuration.find();
    const analysisData = await AnalysisAndReporting.find();

    // Send the data as a response
    res.json({
      nominationData,
      endorsementData,
      issuanceData,
      appointmentData,
      analysisData,
    });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addNominationData = async (req, res) => {
  try {
    const { filename } = req.body;
    const newData = await NominationOfBoard.create({ filename });
    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editNominationData = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    const updatedData = await NominationOfBoard.findByIdAndUpdate(
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

const addEndorsementData = async (req, res) => {
  try {
    const { filename } = req.body;
    const newData = await EndorsementOfSenate.create({ filename });
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
    const { filename } = req.body;
    const newData = await IssuanceOfAppointment.create({ filename });
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
    const { filename } = req.body;
    const newData = await AppointmentDuration.create({ filename });
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

const addAnalysisData = async (req, res) => {
  try {
    const { filename } = req.body;
    const newData = await AnalysisAndReporting.create({ filename });
    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editAnalysisData = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.body;
    const updatedData = await AnalysisAndReporting.findByIdAndUpdate(
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
      NominationOfBoard,
      EndorsementOfSenate,
      IssuanceOfAppointment,
      AppointmentDuration,
      AnalysisAndReporting,
    ];

    let deleted = false;
    for (const collection of collections) {
      const document = await collection.findById(id);
      if (document) {
        await collection.findByIdAndDelete(id);
        deleted = true;
        break;
      }
    }

    if (deleted) {
      res.json({ message: "Data deleted successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  //ADD
  addAnalysisData,
  addAppointmentData,
  getAllData,
  addEndorsementData,
  addIssuanceData,
  addNominationData,
  //EDIT
  editAnalysisData,
  editEndorsementData,
  editAppointmentData,
  editNominationData,
  editIssuanceData,
  //////////////////////
  deleteDataById,
};
