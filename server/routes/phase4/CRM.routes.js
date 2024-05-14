import express from "express";
import {
  getCurriculumReviewData,
  deleteCurriculumReviewModelsElement,
  DownloadCurriculumReviewFile,
} from "../../controllers/CRUD.controller.js";
import upload from "../../utils/upload.js";
import {
  addCRM_PreperationProposalData,
  addCRM_EndorsementatKulliyyahData,
  addCRM_ReviewByKCA1Data,
  addEndorsementatAQAC_DCMData,
  addCRM_ReviewByKCA2Data,
  addCRM_EndorsementatSenateData,
  addRevisionofCRMData,
  addDokumenReviewbyKCA,
} from "../../controllers/fileupload.controller.js";

//////////////////////////////////////////////
const router = express.Router();
/////////////////////////////////////////////

router.post(
  "/preparationproposal",
  upload.single("file"),
  addCRM_PreperationProposalData
);

router.post(
  "/endorsmentatkulliyah",
  upload.single("file"),
  addCRM_EndorsementatKulliyyahData
);

router.post("/kca1", upload.single("file"), addCRM_ReviewByKCA1Data);

router.post("/aqacdcm", upload.single("file"), addEndorsementatAQAC_DCMData);

router.post(
  "/revisionofcrm",
  upload.single("file"),
  addRevisionofCRMData
);

router.post("/kca2", upload.single("file"), addCRM_ReviewByKCA2Data);
router.post(
  "/endorsementatsenate",
  upload.single("file"),
  addCRM_EndorsementatSenateData
);

router.get("/", getCurriculumReviewData);
router.delete("/:id", deleteCurriculumReviewModelsElement);
router.get("/:id", DownloadCurriculumReviewFile);

export default router;
