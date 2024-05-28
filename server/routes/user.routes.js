import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAdmins,
  deleteAdminById,
  addAdmin,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logoutUser);
router.post("/addadmin", addAdmin);

router.get("/profile", getUserProfile);
router.get("/admins", getAdmins);

router.put("/profile", updateUserProfile);

router.delete("/admins/:id", deleteAdminById);

export default router;
