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

  ///// 8
  PreparationofDokumenSemakan,
  DokumenReviewbyKCA,
  EndorsementatJKPT,
} from "../models/fileupload.model.js";

import {
  NominationOfBoard,
  NominationOfBoard2,
} from "../models/members.model.js";

const addMembersData = async (req, res, Model) => {
  try {
    const { filename, name, company, mobileno, email } = req.body;
    const newData = await Model.create({
      filename,
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

const createDocument = async (req, res, Model) => {
  try {
    const { startDate, endDate, targetDate, comment } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await Model.create({
      startDate,
      endDate,
      targetDate,
      comment: comment || "",
      displayName: file?.originalname,
      file: file?.filename,
    });

    res.json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

///////////// 1
export const addNominationData = async (req, res) => {
  await addMembersData(req, res, NominationOfBoard);
};
export const addEndorsementData = async (req, res) => {
  await createDocument(req, res, EndorsementOfSenate);
};
export const addIssuanceData = async (req, res) => {
  await createDocument(req, res, IssuanceOfAppointment);
};
export const addAppointmentData = async (req, res) => {
  await createDocument(req, res, AppointmentDuration);
};
export const addAnalysisData = async (req, res) => {
  await createDocument(req, res, AnalysisAndReporting);
};
///////////////// 2
export const addNominationData2 = async (req, res) => {
  await addMembersData(req, res, NominationOfBoard2);
};
export const addEndorsementData2 = async (req, res) => {
  await createDocument(req, res, EndorsementOfSenate2);
};
export const addIssuanceData2 = async (req, res) => {
  await createDocument(req, res, IssuanceOfAppointment2);
};
export const addAppointmentData2 = async (req, res) => {
  await createDocument(req, res, AppointmentDuration2);
};
/////////////////// 3

export const addSurveyData = async (req, res) => {
  await createDocument(req, res, surveyModel);
};
export const addSurveyAnalysisData = async (req, res) => {
  await createDocument(req, res, surveyAnalysisModel);
};

///////////////////// 4

export const addBenchmarkingAnalysisData = async (req, res) => {
  await createDocument(req, res, BenchmarkingAnalysis);
};
export const addInstitutionVisitData = async (req, res) => {
  await createDocument(req, res, InstitutionVisit);
};
//////////////////// 5

export const addWorkshop1Data = async (req, res) => {
  await createDocument(req, res, Workshop1);
};
export const addWorkshop2Data = async (req, res) => {
  await createDocument(req, res, Workshop2);
};
export const addWorkshop3Data = async (req, res) => {
  await createDocument(req, res, Workshop3);
};
///// 6

export const addSelfReviewReportData = async (req, res) => {
  await createDocument(req, res, SelfReviewReport);
};
export const addSubmissionOfSelfReviewReportData = async (req, res) => {
  await createDocument(req, res, SubmissionOfSelfReviewReport);
};
export const addassessorFeedbackReportData = async (req, res) => {
  await createDocument(req, res, assessorFeedbackReport);
};
export const addReceiptofAssessorFeedbackReportData = async (req, res) => {
  await createDocument(req, res, ReceiptofAssessorFeedbackReport);
};
/////7

///// 8
export const addPreparationofDokumenSemakan = async (req, res) => {
  await createDocument(req, res, PreparationofDokumenSemakan);
};

export const addDokumenReviewbyKCA = async (req, res) => {
  await createDocument(req, res, DokumenReviewbyKCA);
};

export const addEndorsementatJKPT = async (req, res) => {
  await createDocument(req, res, EndorsementatJKPT);
};
