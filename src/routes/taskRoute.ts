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
router.get("/",authMiddleware, getAllTasks);
router.get("/", authMiddleware, getTaskById);
router.post("/", authMiddleware, createTask);
router.put("/:id", updateTask);
router.delete("/:id", authMiddleware, deleteTask);
router.get("/:category", authMiddleware, getTasksByCategory);

export default router;
