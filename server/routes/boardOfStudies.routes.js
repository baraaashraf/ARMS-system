import express from "express";
import {
  getAllData,
  deleteDataById,
  addAppointmentData,
  addAnalysisData,
  addIssuanceData,
  addEndorsementData,
  addNominationData
} from "../controllers/boardOfStudies.controller.js";

const router = express.Router();

router.get("/boardofstudies", getAllData);

router.post("/boardofstudies/appointmentData", addAppointmentData);
router.post("/boardofstudies/analysisdata", addAnalysisData);
router.post("/boardofstudies/issuancedata", addIssuanceData);
router.post("/boardofstudies/endorsementdata", addEndorsementData);
router.post("/boardofstudies/nominationdata", addNominationData);

router.delete("/boardofstudies/:id", deleteDataById);

export default router;
