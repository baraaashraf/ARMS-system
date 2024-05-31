import {
  ///////////// 1
  EndorsementOfSenate,
  AnalysisReport,
  ///////////////// 2
  EndorsementOfSenate2,
  /////////////////// 3
  AlumniSurvey,
  EmployerSurvey,
  StudentSurvey,
  AnalysisReportSurvey,
  ///////////////////// 4
  BenchmarkingAnalysis,
  InstitutionVisit,
  //////////////////// 5
  Workshop1,
  Workshop2,
  Workshop3,

  ///// 6
  SelfReviewReport,
  SubmissionOfSelfReviewReport,
  assessorFeedbackReport,
  ReceiptofAssessorFeedbackReport,

  /////7
  CRM_PreperationProposal,
  CRM_EndorsementatKulliyyah,
  CRM_ReviewByKCA1,
  EndorsementatAQAC_DCM,
  RevisionofCRM,
  CRM_ReviewByKCA2,
  CRM_EndorsementatSenate,
  CRM_Proposal,
  ///// 8
  PreparationofDokumenSemakan,
  DokumenReviewbyKCA,
  EndorsementatJKPT,
} from "../models/fileupload.model.js";

import {
  NominationOfBoard,
  NominationOfBoard2,
} from "../models/members.model.js";

import { TimelineSchema } from "../models/dashboard/timeline.model.js";

import fs from "fs";
import path from "path";

const getAllData = async (req, res, models) => {
  try {
    const data = {};
    for (const model of models) {
      data[model.modelName] = await model.find();
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    let errorMessage = "Internal server error";
    if (error.name === "MongoError") {
      errorMessage = `MongoDB error: ${error.message}`;
    } else if (error.name === "ValidationError") {
      errorMessage = `Validation error: ${error.message}`;
    }
    res.status(500).json({ message: errorMessage });
  }
};

const updateDataById = async (req, res, collections) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    let documentFound = false;
    console.log("updateData", updateData);

    for (const collection of collections) {
      const document = await collection.findById(id);

      if (document) {
        if (
          collection === NominationOfBoard ||
          collection === NominationOfBoard2
        ) {
          await collection.findByIdAndUpdate(id, updateData);
          await TimelineSchema.findOneAndUpdate(
            {
              mainDataID: id,
            },
            {
              endDate:
                updateData.endDate ||
                updateData.actualDate ||
                updateData.appointment_end_date ||
                endDate,
            }
          );
        } else {
          await TimelineSchema.findOneAndUpdate(
            {
              mainDataID: id,
            },
            {
              endDate:
                updateData.endDate ||
                updateData.actualDate ||
                updateData.appointment_end_date ||
                endDate,
            }
          );
          // Update the document properties from req.body
          Object.assign(document, updateData);
          await document.save();
        }
        documentFound = true;
        break;
      }
    }
    if (documentFound) {
      res.status(200).json({ message: "Data updated successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const filterProperties = (object, excludedProperties) => {
  const toBeFiltered = object.toObject();
  const filteredObject = { ...toBeFiltered };

  excludedProperties.forEach((property) => {
    if (filteredObject.hasOwnProperty(property)) {
      delete filteredObject[property];
    }
  });

  return filteredObject;
};

const getDataById = async (req, res, collections) => {
  try {
    const { id } = req.params;
    let documentFound = false;

    for (const collection of collections) {
      const document = await collection.findById(id);

      if (document) {
        const excludedProperties = ["createdAt", "updatedAt", "__v"];
        const filteredDocument = filterProperties(document, excludedProperties);
        console.log("filteredDocument", filteredDocument);

        res.status(200).json(filteredDocument);
        documentFound = true;
        break;
      }
    }

    if (!documentFound) {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteDataById = async (req, res, collections) => {
  try {
    const { id } = req.params;
    let documentFound = false;

    for (const collection of collections) {
      const document = await collection.findById(id);

      if (document) {
        if (
          collection === NominationOfBoard ||
          collection === NominationOfBoard2
        ) {
          await collection.findByIdAndDelete(id);
          await TimelineSchema.findOneAndDelete({ mainDataID: id });
        } else {
          if (document.file) {
            const filePath = path.join("./uploads", document.file);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            } else {
              console.log(filePath, "cannot find");
            }
          }
          await collection.findByIdAndDelete(id);
          await TimelineSchema.findOneAndDelete({ mainDataID: id });
        }
        documentFound = true;
        break;
      }
    }
    if (documentFound) {
      res.status(200).json({ message: "Data deleted successfully" });
    } else {
      res.status(404).json({ message: "Document not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getFileById = async (req, res, collections) => {
  try {
    const { id } = req.params;
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
          const fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
          fileFound = true;
          break;
        } else {
          console.log(filePath, "cannot find ");
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

///////////// 1
const boardOfStudiesModels = [
  NominationOfBoard,
  EndorsementOfSenate,
  AnalysisReport,
];
export const getAllBOFData = async (req, res) => {
  await getAllData(req, res, boardOfStudiesModels);
};

export const updateBOFRow = async (req, res) => {
  await updateDataById(req, res, boardOfStudiesModels);
};

export const getBOFRow = async (req, res) => {
  await getDataById(req, res, boardOfStudiesModels);
};

export const deleteBOFElement = async (req, res) => {
  await deleteDataById(req, res, boardOfStudiesModels);
};
export const DownloadBOFFile = async (req, res) => {
  await getFileById(req, res, boardOfStudiesModels);
};

///////////////// 2
const assessorsModels = [NominationOfBoard2, EndorsementOfSenate2];
export const getAssessorsData = async (req, res) => {
  await getAllData(req, res, assessorsModels);
};
export const updateAssessorsRow = async (req, res) => {
  await updateDataById(req, res, assessorsModels);
};

export const getAssessorsRow = async (req, res) => {
  await getDataById(req, res, assessorsModels);
};

export const deleteAssessorsElement = async (req, res) => {
  await deleteDataById(req, res, assessorsModels);
};
export const DownloadAssessorsFile = async (req, res) => {
  await getFileById(req, res, assessorsModels);
};

/////////////////// 3
const surveyModels = [
  AlumniSurvey,
  EmployerSurvey,
  StudentSurvey,
  AnalysisReportSurvey,
];
export const getSurveyData = async (req, res) => {
  await getAllData(req, res, surveyModels);
};

export const updateSurveyRow = async (req, res) => {
  await updateDataById(req, res, surveyModels);
};

export const getSurveyRow = async (req, res) => {
  await getDataById(req, res, surveyModels);
};

export const deletesurveyElement = async (req, res) => {
  await deleteDataById(req, res, surveyModels);
};
export const DownloadSurveyFile = async (req, res) => {
  await getFileById(req, res, surveyModels);
};

///////////////////// 4
const BenchmarkingModels = [BenchmarkingAnalysis, InstitutionVisit];
export const getBenchmarkingData = async (req, res) => {
  await getAllData(req, res, BenchmarkingModels);
};
export const updateBenchmarkingRow = async (req, res) => {
  await updateDataById(req, res, BenchmarkingModels);
};

export const getBenchmarkingRow = async (req, res) => {
  await getDataById(req, res, BenchmarkingModels);
};

export const deleteBenchmarkingElement = async (req, res) => {
  await deleteDataById(req, res, BenchmarkingModels);
};
export const DownloadBenchmarkingFile = async (req, res) => {
  await getFileById(req, res, BenchmarkingModels);
};

//////////////////// 5
const ProgrammeCurriculumModels = [Workshop1, Workshop2, Workshop3];
export const getProgrammeCurriculumData = async (req, res) => {
  await getAllData(req, res, ProgrammeCurriculumModels);
};
export const updateProgrammeCurriculumRow = async (req, res) => {
  await updateDataById(req, res, ProgrammeCurriculumModels);
};

export const getProgrammeCurriculumRow = async (req, res) => {
  await getDataById(req, res, ProgrammeCurriculumModels);
};

export const deleteProgrammeCurriculumElement = async (req, res) => {
  await deleteDataById(req, res, ProgrammeCurriculumModels);
};
export const DownloadProgrammeCurriculumFile = async (req, res) => {
  await getFileById(req, res, ProgrammeCurriculumModels);
};

///// 6
const selfswotModels = [
  SelfReviewReport,
  SubmissionOfSelfReviewReport,
  assessorFeedbackReport,
  ReceiptofAssessorFeedbackReport,
];
export const getSelfSWOTData = async (req, res) => {
  await getAllData(req, res, selfswotModels);
};
export const updateSelfSWOTRow = async (req, res) => {
  await updateDataById(req, res, selfswotModels);
};

export const getSelfSWOTRow = async (req, res) => {
  await getDataById(req, res, selfswotModels);
};

export const deleteselfswotElement = async (req, res) => {
  await deleteDataById(req, res, selfswotModels);
};
export const DownloadSelfSWOTFile = async (req, res) => {
  await getFileById(req, res, selfswotModels);
};

/////7
const curriculumReviewModels = [
  CRM_PreperationProposal,
  CRM_EndorsementatKulliyyah,
  CRM_ReviewByKCA1,
  EndorsementatAQAC_DCM,
  RevisionofCRM,
  CRM_ReviewByKCA2,
  CRM_EndorsementatSenate,
  CRM_Proposal,
];
export const getCurriculumReviewData = async (req, res) => {
  await getAllData(req, res, curriculumReviewModels);
};
export const updateCurriculumReviewRow = async (req, res) => {
  await updateDataById(req, res, curriculumReviewModels);
};

export const getCurriculumReviewRow = async (req, res) => {
  await getDataById(req, res, curriculumReviewModels);
};

export const deleteCurriculumReviewModelsElement = async (req, res) => {
  await deleteDataById(req, res, curriculumReviewModels);
};
export const DownloadCurriculumReviewFile = async (req, res) => {
  await getFileById(req, res, curriculumReviewModels);
};

///// 8
const dokumenSemakanModels = [
  PreparationofDokumenSemakan,
  DokumenReviewbyKCA,
  EndorsementatJKPT,
];
export const getDokumenSemakanData = async (req, res) => {
  await getAllData(req, res, dokumenSemakanModels);
};

export const updatedokumenSemakanRow = async (req, res) => {
  await updateDataById(req, res, dokumenSemakanModels);
};

export const getdokumenSemakanRow = async (req, res) => {
  await getDataById(req, res, dokumenSemakanModels);
};

export const deleteDokumenSemakanElement = async (req, res) => {
  await deleteDataById(req, res, dokumenSemakanModels);
};
export const DownloadDokumenSemakanFile = async (req, res) => {
  await getFileById(req, res, dokumenSemakanModels);
};
