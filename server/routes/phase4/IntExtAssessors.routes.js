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
  addAppointmentData2,
  addIssuanceData2,
  addEndorsementData2,
  addNominationData2,
} from "../../controllers/fileupload.controller.js";
//////////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////////
router.post("/nominationdata", addNominationData2);

router.post("/appointmentData", upload.single("file"), addAppointmentData2);

router.post("/endorsementdata", upload.single("file"), addEndorsementData2);

router.post("/issuancedata", upload.single("file"), addIssuanceData2);

router.get("/download/:id", DownloadAssessorsFile);
router.get("/:id", getAssessorsRow);
router.get("/", getAssessorsData);

router.delete("/:id", deleteAssessorsElement);
router.put("/:id", updateAssessorsRow);

export default router;
