import express from "express";
import {
  getAllBOFData,
  deleteBOFElement,
  DownloadBOFFile,
} from "../../controllers/CRUD.controller.js";
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

router.get("/", getAllBOFData);

router.post(
  "/boardofstudies/appointmentData",
  upload.single("file"),
  addAppointmentData
);
router.post("/analysisdata", upload.single("file"), addAnalysisData);
router.post("/issuancedata", upload.single("file"), addIssuanceData);

router.post("/nominationdata", addNominationData);

router.delete("/:id", deleteBOFElement);
router.get("/:id", DownloadBOFFile);

export default router;
