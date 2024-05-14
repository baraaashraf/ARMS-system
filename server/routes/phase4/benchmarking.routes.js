import express from "express";
import {
  deleteDataById,
  getAllData,
  getFileById,
} from "../../controllers/phase4/benchmarking.controller.js";
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

router.get("/", getAllData);
router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
