import express from "express";
import {
  getAllData,
  deleteDataById,
  addAppointmentData,
  addAnalysisData,
  addIssuanceData,
  addEndorsementData,
  addNominationData,
  getFileById,
} from "../../controllers/phase4/boardOfStudies.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////

const router = express.Router();

router.post(
  "/boardofstudies/endorsementdata",
  upload.single("file"),
  addEndorsementData
);

/////////////////////////////////////////////

router.get("/boardofstudies", getAllData);

router.post(
  "/boardofstudies/appointmentData",
  upload.single("file"),
  addAppointmentData
);
router.post(
  "/boardofstudies/analysisdata",
  upload.single("file"),
  addAnalysisData
);
router.post(
  "/boardofstudies/issuancedata",
  upload.single("file"),
  addIssuanceData
);

router.post("/boardofstudies/nominationdata", addNominationData);

router.delete("/boardofstudies/:id", deleteDataById);
router.get("/boardofstudies/:id", getFileById);

export default router;
