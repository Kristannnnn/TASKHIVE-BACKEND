import {
  createTask,
  deleteTask,
  getAllCompletedTaskByCategory,
  getAllTasks,
  getTasksByCategory,
  updateTask,
} from "@/controllers/taskController";
import { authMiddleware } from "@/middlewares/auth";
import express from "express";

//task routes
const router = express.Router();
//task routes
router.get("/", authMiddleware, getAllTasks);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);
router.get(
  "/:category/completed",
  authMiddleware,
  getAllCompletedTaskByCategory,
);
router.get("/:category", authMiddleware, getTasksByCategory);

export default router;
