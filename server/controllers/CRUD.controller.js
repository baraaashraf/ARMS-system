import {
  ///////////// 1
  EndorsementOfSenate,
  IssuanceOfAppointment,
  AppointmentDuration,
  AnalysisAndReporting,
  ///////////////// 2
  EndorsementOfSenate2,
  IssuanceOfAppointment2,
  AppointmentDuration2,
  /////////////////// 3
  surveyModel,
  surveyAnalysisModel,
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
  ///// 8
  PreparationofDokumenSemakan,
  DokumenReviewbyKCA,
  EndorsementatJKPT,
} from "../models/fileupload.model.js";

import {
  NominationOfBoard,
  NominationOfBoard2,
} from "../models/members.model.js";

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
  IssuanceOfAppointment,
  AppointmentDuration,
  AnalysisAndReporting,
];
export const getAllBOFData = async (req, res) => {
  await getAllData(req, res, boardOfStudiesModels);
};

export const deleteBOFElement = async (req, res) => {
  await deleteDataById(req, res, boardOfStudiesModels);
};
export const DownloadBOFFile = async (req, res) => {
  await getFileById(req, res, boardOfStudiesModels);
};

///////////////// 2
const assessorsModels = [
  NominationOfBoard2,
  EndorsementOfSenate2,
  IssuanceOfAppointment2,
  AppointmentDuration2,
];
export const getAssessorsData = async (req, res) => {
  await getAllData(req, res, assessorsModels);
};
export const deleteAssessorsElement = async (req, res) => {
  await deleteDataById(req, res, assessorsModels);
};
export const DownloadAssessorsFile = async (req, res) => {
  await getFileById(req, res, assessorsModels);
};

/////////////////// 3
const surveyModels = [surveyModel, surveyAnalysisModel];
export const getSurveyData = async (req, res) => {
  await getAllData(req, res, surveyModels);
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
];
export const getCurriculumReviewData = async (req, res) => {
  await getAllData(req, res, curriculumReviewModels);
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

export const deleteDokumenSemakanElement = async (req, res) => {
  await deleteDataById(req, res, dokumenSemakanModels);
};
export const DownloadDokumenSemakanFile = async (req, res) => {
  await getFileById(req, res, dokumenSemakanModels);
};
