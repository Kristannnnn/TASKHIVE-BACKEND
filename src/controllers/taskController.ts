import Tasks from "@/models/Tasks";
import { Request, Response } from "express";

//Create new task
export const createTask = async (req: Request, res: Response) => {
  const { task, status } = req.body;
  if (!task || !status) {
    return res.status(400).json({ message: "Task and status are required" });
  }
  try {
    const newTask = await Tasks.create({ task, status });
    res
      .status(201)
      .json({ message: "task created successfully", data: newTask });
  } catch (err) {
    console.error("Task creation error:", err);
    res.status(500).json({
      message: "cannot create task",
    });
  }
};
//Get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Tasks.find();
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }
    res.json(tasks);
  } catch (err) {
    console.error("Task fetch error:", err);
    res.status(500).json({
      message: "cannot fetch tasks",
    });
  }
};

//Get single task
export const getTask = async (req: Request, res: Response) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    return res.status(400).json({ message: "error fetching task" });
  }
};

//Update task