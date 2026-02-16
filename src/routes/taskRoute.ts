import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  getTasksByCategory,
  updateTask,
} from "@/controllers/taskController";
import { authMiddleware } from "@/middlewares/auth";
import express from "express";

//task routes
const router = express.Router();
//user routes
router.get("/", getAllTasks);
router.get("/", getTaskById);
router.post("/", authMiddleware, createTask);
router.put("/:id", updateTask);
router.delete("/", authMiddleware, deleteTask);
router.get("/:category", authMiddleware, getTasksByCategory);

export default router;
