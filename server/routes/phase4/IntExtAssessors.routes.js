import express from "express";
import {
  getAllData,
  deleteDataById,
  addAppointmentData,
  addIssuanceData,
  addEndorsementData,
  addNominationData,
  getFileById,
} from "../../controllers/phase4/IntExtAssessors.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////

const router = express.Router();

router.post(
  "/assessors/endorsementdata",
  upload.single("file"),
  addEndorsementData
);

/////////////////////////////////////////////

router.get("/assessors", getAllData);

router.post(
  "/assessors/appointmentData",
  upload.single("file"),
  addAppointmentData
);

router.post(
  "/assessors/issuancedata",
  upload.single("file"),
  addIssuanceData
);

router.post("/assessors/nominationdata", addNominationData);

router.delete("/assessors/:id", deleteDataById);
router.get("/assessors/:id", getFileById);

export default router;
