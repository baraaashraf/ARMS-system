import express from "express";
import {
  getAssessorsData,
  deleteAssessorsElement,
  DownloadAssessorsFile,
} from "../../controllers/CRUD.controller.js";
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

router.get("/", getAssessorsData);

router.post("/appointmentData", upload.single("file"), addAppointmentData);

router.post("/issuancedata", upload.single("file"), addIssuanceData);

router.post("/nominationdata", addNominationData);

router.delete("/:id", deleteAssessorsElement);
router.get("/:id", DownloadAssessorsFile);

export default router;
