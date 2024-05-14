import express from "express";
import {
  getAllData,
  deleteDataById,
  getFileById,
} from "../../controllers/phase4/selfSWOT.controller.js";
import upload from "../../utils/upload.js";
import {
  addSelfReviewReportData,
  addReceiptofAssessorFeedbackReportData,
  addSubmissionOfSelfReviewReportData,
  addassessorFeedbackReportData,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/selfreviewreport",
  upload.single("file"),
  addSelfReviewReportData
);

router.post(
  "/submissionofselfreviewreport",
  upload.single("file"),
  addSubmissionOfSelfReviewReportData
);

router.post(
  "/assessorfeedbackreport",
  upload.single("file"),
  addassessorFeedbackReportData
);

router.post(
  "/receiptofassessorfeedback",
  upload.single("file"),
  addReceiptofAssessorFeedbackReportData
);

router.get("/", getAllData);
router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
