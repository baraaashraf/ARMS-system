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

const addMembersData = async (req, res, Model) => {
  try {
    const {
      filename,
      name,
      company,
      mobileno,
      email,
      position,
      appointment_issue_date,
      appointment_start_date,
      appointment_end_date,
    } = req.body;
    const newData = await Model.create({
      filename,
      name,
      company,
      mobileno,
      email,
      position,
      appointment_issue_date,
      appointment_start_date,
      appointment_end_date,
    });
    res.status(201).json(newData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createDocument = async (req, res, Model) => {
  try {
    const { startDate, endDate, targetDate, actualDate, comment } = req.body;
    const file = req.file;
    console.log("req.body", req.body);
    console.log("file", req.file);
    const newData = await Model.create({
      startDate,
      endDate,
      targetDate,
      actualDate,
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
export const addAnalysisData = async (req, res) => {
  await createDocument(req, res, AnalysisReport);
};
///////////////// 2
export const addNominationData2 = async (req, res) => {
  await addMembersData(req, res, NominationOfBoard2);
};
export const addEndorsementData2 = async (req, res) => {
  await createDocument(req, res, EndorsementOfSenate2);
};

/////////////////// 3

export const addAlumniSurveyData = async (req, res) => {
  await createDocument(req, res, AlumniSurvey);
};
export const addEmployerSurveyData = async (req, res) => {
  await createDocument(req, res, EmployerSurvey);
};
export const addStudentSurveyData = async (req, res) => {
  await createDocument(req, res, StudentSurvey);
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
export const addCRM_PreperationProposalData = async (req, res) => {
  await createDocument(req, res, CRM_PreperationProposal);
};
export const addCRM_EndorsementatKulliyyahData = async (req, res) => {
  await createDocument(req, res, CRM_EndorsementatKulliyyah);
};
export const addCRM_ReviewByKCA1Data = async (req, res) => {
  await createDocument(req, res, CRM_ReviewByKCA1);
};
export const addEndorsementatAQAC_DCMData = async (req, res) => {
  await createDocument(req, res, EndorsementatAQAC_DCM);
};
export const addRevisionofCRMData = async (req, res) => {
  await createDocument(req, res, RevisionofCRM);
};

export const addCRM_ReviewByKCA2Data = async (req, res) => {
  await createDocument(req, res, CRM_ReviewByKCA2);
};
export const addCRM_EndorsementatSenateData = async (req, res) => {
  await createDocument(req, res, CRM_EndorsementatSenate);
};
export const addCRM_ProposalData = async (req, res) => {
  await createDocument(req, res, CRM_Proposal);
};

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
