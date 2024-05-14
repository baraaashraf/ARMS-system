import express from "express";
import {
  getAllData,
  deleteDataById,
  getFileById,
  ////////////
} from "../../controllers/phase4/DokumenSemakan.controller.js";

import {
  addPreparationofDokumenSemakan,
  addDokumenReviewbyKCA,
  addEndorsementatJKPT,
} from "../../controllers/fileupload.controller.js";
import upload from "../../utils/upload.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/preparationofdokumensemakan",
  upload.single("file"),
  addPreparationofDokumenSemakan
);

router.post("/reviewbykca", upload.single("file"), addDokumenReviewbyKCA);

router.post("/endorsementatjkpt", upload.single("file"), addEndorsementatJKPT);

router.get("/", getAllData);
router.delete("/:id", deleteDataById);
router.get("/:id", getFileById);

export default router;
