import DokumenSemakanRoutes from "./DokumenSemakan.routes.js";
import boardofStudiesRoutes from "./boardOfStudies.routes.js";
import assersorsRoutes from "./IntExtAssessors.routes.js";
import surveyRoutes from "./survey.routes.js";
import benchmarkingRoutes from "./benchmarking.routes.js";
import ProgrammeCurriculumRoutes from "./programCirriculum.routes.js";
import SelfswotRoutes from "./selfSWOT.routes.js";

import express from "express";
const router = express.Router();


router.use('/dokumensemakan', DokumenSemakanRoutes);
router.use('/boardofstudies', boardofStudiesRoutes);
router.use('/assessors', assersorsRoutes);
router.use('/survey', surveyRoutes);
router.use('/benchmarking', benchmarkingRoutes);
router.use('/programcurriculum', ProgrammeCurriculumRoutes);
router.use('/selfswot', SelfswotRoutes);


export default router;