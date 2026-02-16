import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "@/controllers/userController";
import { authMiddleware } from "@/middlewares/auth";
import express from "express";

const router = express.Router();
//user routes
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

export default router;
