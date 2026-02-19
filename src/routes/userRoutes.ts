import {
  createUser,
  deleteUser,
  forgotpass,
  getAllUsers,
  updateUser,
} from "@/controllers/userController";
import { authMiddleware } from "@/middlewares/auth";
import express from "express";

const router = express.Router();
//user routes
router.get("/", forgotpass);
router.post("/", createUser);
router.get("/", authMiddleware, getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id",authMiddleware, deleteUser);

export default router;
