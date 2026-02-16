import { AuthRequest } from "@/middlewares/auth";
import { default as Tasks } from "@/models/Tasks";
import { Request, Response } from "express";

export const getTasksByCategory = async (req: AuthRequest, res: Response) => {
  try {
    const { category } = req.params;

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tasks = await Tasks.find({
      user: req.user.id,
      category,
    });

    res.json(tasks);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

//Create new task
export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { taskName, category, status } = req.body;

    const newTask = await Tasks.create({
      taskName,
      category: category.toLowerCase(),
      status,
      user: req.user.id,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task" });
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
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await Tasks.findById();

    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Failed fetching task" });
  }
};

//Update task
export const updateTask = async (req: Request, res: Response) => {
  try {
    console.log("ID", req.params.id);

    const updateTasks = await Tasks.findByIdAndUpdate(
      req.params.id,
      updateTask,
      {
        returnDocument: "after",
      },
    );
    if (!updateTasks) {
      return res.status(404).json({ message: "user not found" });
    }
    console.log("Data", updateTask);
    res.json(updateTasks);
  } catch (err) {
    return res.status(400).json({ message: "failed to update user" });
  }
};

//delete task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deleteTask = await Tasks.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: "Failed to delete task" });
  }
};
