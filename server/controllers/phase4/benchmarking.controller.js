import {
  BenchmarkingAnalysis,
  InstitutionVisit,
} from "../../models/fileupload.model.js";

import fs from "fs";
import path from "path";

const addBenchmarkingAnalysisData = async (req, res) => {
  try {
    const { startDate, endDate, targetDate } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await BenchmarkingAnalysis.create({
      startDate,
      endDate,
      targetDate,
      displayName: file?.originalname,
      file: file?.filename,
    });

    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addInstitutionVisitData = async (req, res) => {
  try {
    const { startDate, endDate, targetDate } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await InstitutionVisit.create({
      startDate,
      endDate,
      targetDate,
      displayName: file?.originalname,
      file: file?.filename,
    });

    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllData = async (req, res) => {
  try {
    // Fetch data from each model
    const BenchmarkingData = await BenchmarkingAnalysis.find();
    const VisitData = await InstitutionVisit.find();

    // Send the data as a response
    res.json({
      BenchmarkingData,
      VisitData,
    });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const collections = [BenchmarkingAnalysis, InstitutionVisit];

    let deleted = false;
    for (const collection of collections) {
      const document = await collection.findById(id);
      if (document) {
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
      res.json({ message: "Data deleted successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFileById = async (req, res) => {
  try {
    const { id } = req.params;
    const collections = [BenchmarkingAnalysis, InstitutionVisit];

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
          // If file is not found, continue searching in other collections
          continue;
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
  deleteDataById,
  getAllData,
  getFileById,
};
