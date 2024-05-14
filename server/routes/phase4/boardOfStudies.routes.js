import express from "express";
import {
  getAllData,
  deleteDataById,
  getFileById,
} from "../../controllers/phase4/boardOfStudies.controller.js";
import upload from "../../utils/upload.js";

import {
  addAppointmentData,
  addAnalysisData,
  addIssuanceData,
  addEndorsementData,
  addNominationData,
} from "../../controllers/fileupload.controller.js";
//////////////////////////////////////////////

const router = express.Router();

router.post("/endorsementdata", upload.single("file"), addEndorsementData);

/////////////////////////////////////////////

router.get("/", getAllData);

router.post(
  "/boardofstudies/appointmentData",
  upload.single("file"),
  addAppointmentData
);
router.post("/analysisdata", upload.single("file"), addAnalysisData);
router.post("/issuancedata", upload.single("file"), addIssuanceData);

router.post("/nominationdata", addNominationData);

router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
