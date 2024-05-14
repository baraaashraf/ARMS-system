import express from "express";
import {
  getSurveyData,
  deletesurveyElement,
  DownloadSurveyFile,
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

router.get("/", getSurveyData);
router.delete("/:id", deletesurveyElement);
router.get("/:id", DownloadSurveyFile);

export default router;
