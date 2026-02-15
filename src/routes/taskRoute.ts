import { createTask, deleteTask, getAllTasks, updateTask } from "@/controllers/taskController";
import { authMiddleware } from "@/middlewares/auth";
import express from "express";

//task routes
const router = express.Router();
//user routes
router.get("/", authMiddleware, getAllTasks);
router.post("/", authMiddleware, createTask);
router.put("/", authMiddleware, updateTask);
router.delete("/", authMiddleware, deleteTask);

export default router;
