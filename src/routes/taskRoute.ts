import { createTask, deleteTask, getAllTasks, updateTask } from "@/controllers/taskController";
import express from "express";

//task routes
const router = express.Router();
//user routes
router.get("/", getAllTasks);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;
