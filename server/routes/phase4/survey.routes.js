import express from "express";
import {
  getAllData,
  deleteDataById,
  addSurveyData,
  addSurveyAnalysisData,
  getFileById,
} from "../../controllers/phase4/survey.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post("/survey/surveydata", upload.single("file"), addSurveyData);

router.post(
  "/survey/surveyanalysisdata",
  upload.single("file"),
  addSurveyAnalysisData
);

router.get("/survey", getAllData);
router.delete("/survey/:id", deleteDataById);
router.get("/survey/:id", getFileById);

export default router;
