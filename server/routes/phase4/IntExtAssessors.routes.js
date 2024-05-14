import express from "express";
import {
  getAllData,
  deleteDataById,
  getFileById,
} from "../../controllers/phase4/IntExtAssessors.controller.js";
import upload from "../../utils/upload.js";

import {
  addAppointmentData,
  addIssuanceData,
  addEndorsementData,
  addNominationData,
} from "../../controllers/fileupload.controller.js";
//////////////////////////////////////////////

const router = express.Router();

router.post(
  "/assessors/endorsementdata",
  upload.single("file"),
  addEndorsementData
);

/////////////////////////////////////////////

router.get("/", getAllData);

router.post("/appointmentData", upload.single("file"), addAppointmentData);

router.post("/issuancedata", upload.single("file"), addIssuanceData);

router.post("/nominationdata", addNominationData);

router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
