import mongoose from "mongoose";

const FileUploadSchema = mongoose.Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    targetDate: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    displayName: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

/////////////////////////////////////////////////
////////// collection creation /////////////////
/////////////////////////////////////////////////

///////// 1 Board of studies /////////////

const EndorsementOfSenate = mongoose.model(
  "EndorsementOfSenate",
  FileUploadSchema
);
const IssuanceOfAppointment = mongoose.model(
  "IssuanceOfAppointment",
  FileUploadSchema
);
const AppointmentDuration = mongoose.model(
  "AppointmentDuration",
  FileUploadSchema
);
const AnalysisAndReporting = mongoose.model(
  "AnalysisAndReporting",
  FileUploadSchema
);
///////// 2 Internal and external assessors /////////////

const EndorsementOfSenate2 = mongoose.model(
  "EndorsementOfSenate2",
  FileUploadSchema
);
const IssuanceOfAppointment2 = mongoose.model(
  "IssuanceOfAppointment2",
  FileUploadSchema
);
const AppointmentDuration2 = mongoose.model(
  "AppointmentDuration2",
  FileUploadSchema
);
///////////////// 3 Survey//////////////////////////

const surveyModel = mongoose.model("Survey", FileUploadSchema);
const surveyAnalysisModel = mongoose.model("surveyAnalysis", FileUploadSchema);

/////////////// 4 Benchmarking//////////////////////////

const BenchmarkingAnalysis = mongoose.model(
  "BenchmarkingAnalysis",
  FileUploadSchema
);
const InstitutionVisit = mongoose.model("InstitutionVisit", FileUploadSchema);

////////////// 5 Program Curriculum//////////////////////

const Workshop1 = mongoose.model("Workshop1", FileUploadSchema);

const Workshop2 = mongoose.model("Workshop2", FileUploadSchema);

const Workshop3 = mongoose.model("Workshop3", FileUploadSchema);

/////////////// 6 Self-review and SWOT Analysis////////////////////

const SelfReviewReport = mongoose.model("SelfReviewReport", FileUploadSchema);

const SubmissionOfSelfReviewReport = mongoose.model(
  "SubmissionOfSelfReviewReport",
  FileUploadSchema
);

const assessorFeedbackReport = mongoose.model(
  "AssessorFeedbackReport",
  FileUploadSchema
);

const ReceiptofAssessorFeedbackReport = mongoose.model(
  "ReceiptofAssessorFeedbackReport",
  FileUploadSchema
);

///////////// 7 Curriculum Review Proposal/////////////////

////////////// 8 Dokumen Semakan/////////////////

const PreparationofDokumenSemakan = mongoose.model(
  "PreparationofDokumenSemakan",
  FileUploadSchema
);

const DokumenReviewbyKCA = mongoose.model(
  "DokumenReviewbyKCA",
  FileUploadSchema
);

const EndorsementatJKPT = mongoose.model("JKPTEndorsement", FileUploadSchema);

/////////////////////////////////////////////////
///////////////// exporting /////////////////////
/////////////////////////////////////////////////
export {
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
};
