import express from "express";
import {
  getAllData,
  deleteDataById,
  getFileById,
} from "../../controllers/phase4/programCurriculum.controller.js";
import upload from "../../utils/upload.js";
import {
  addWorkshop1Data,
  addWorkshop2Data,
  addWorkshop3Data,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post("/workshop1", upload.single("file"), addWorkshop1Data);
router.post("/workshop2", upload.single("file"), addWorkshop2Data);
router.post("/workshop3", upload.single("file"), addWorkshop3Data);

router.get("/", getAllData);
router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
