import express from "express";
import {
  getSurveyData,
  deletesurveyElement,
  DownloadSurveyFile,
  updateSelfSWOTRow,
  getSurveyRow,
} from "../../controllers/CRUD.controller.js";

import {
  addSurveyData,
  addSurveyAnalysisData,
} from "../../controllers/fileupload.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post("/surveydata", upload.single("file"), addSurveyData);

router.post(
  "/surveyanalysisdata",
  upload.single("file"),
  addSurveyAnalysisData
);


router.get("/download/:id", DownloadSurveyFile);
router.get("/:id", getSurveyRow);
router.get("/", getSurveyData);

router.delete("/:id", deletesurveyElement);
router.put("/:id", updateSelfSWOTRow);

export default router;
