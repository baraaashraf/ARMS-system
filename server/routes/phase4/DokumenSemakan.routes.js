import express from "express";
import {
  getDokumenSemakanData,
  deleteDokumenSemakanElement,
  DownloadDokumenSemakanFile
  ////////////
} from "../../controllers/CRUD.controller.js";

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

router.get("/", getDokumenSemakanData);
router.delete("/:id", deleteDokumenSemakanElement);
router.get("/:id", DownloadDokumenSemakanFile);

export default router;
