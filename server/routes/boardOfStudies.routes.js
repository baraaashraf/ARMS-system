import express from "express";
import {
  getAllData,
  deleteDataById,
} from "../controllers/boardOfStudies.controller.js";

const router = express.Router();

router.get("/boardofstudies", getAllData);
router.delete("/boardofstudies/:id", deleteDataById);


export default router;
