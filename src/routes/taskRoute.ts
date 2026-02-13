import { createTask, getAllTasks } from "@/controllers/taskController";
import express from "express";

//task routes
const router = express.Router();
//user routes
router.get("/", getAllTasks);
router.post("/", createTask);

export default router;
