import express from "express";
import {
  getAssessorsData,
  deleteAssessorsElement,
  DownloadAssessorsFile,
  updateAssessorsRow,
  getAssessorsRow,
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


router.post("/appointmentData", upload.single("file"), addAppointmentData);

router.post("/issuancedata", upload.single("file"), addIssuanceData);

router.post("/nominationdata", addNominationData);

router.get("/download/:id", DownloadAssessorsFile);
router.get("/:id", getAssessorsRow);
router.get("/", getAssessorsData);


router.delete("/:id", deleteAssessorsElement);
router.put("/:id", updateAssessorsRow);

export default router;
