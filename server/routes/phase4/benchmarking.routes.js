import express from "express";
import {
  deleteBenchmarkingElement,
  getBenchmarkingData,
  DownloadBenchmarkingFile,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";
import {
  addBenchmarkingAnalysisData,
  addInstitutionVisitData,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/benchmarkingdata",
  upload.single("file"),
  addBenchmarkingAnalysisData
);

router.post(
  "/institutionvisitdata",
  upload.single("file"),
  addInstitutionVisitData
);

router.get("/", getBenchmarkingData);
router.delete("/:id", deleteBenchmarkingElement);
router.get("/:id", DownloadBenchmarkingFile);

export default router;
