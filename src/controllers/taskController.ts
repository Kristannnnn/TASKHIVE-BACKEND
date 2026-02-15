import Tasks from "@/models/Tasks";
import { Request, Response } from "express";

//Create new task
export const createTask = async (req: Request, res: Response) => {
  const { taskName, category, status } = req.body;
  if (!taskName || !status) {
    return res.status(400).json({ message: "Task and status are required" });
  }
  try {
    const newTask = await Tasks.create({ taskName, category, status,  });
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
export const updateTask = async (req: Request, res: Response) => {
  try {
    
    const { taskName, category, status } = req.body();
    const updateData: any = {};
    if (taskName) updateData.taskName = taskName;
    if (category) updateData.category = category;
    if (status) updateData.status = status;

    const updateTasks = await Tasks.findByIdAndUpdate(req.params.id, updateTask, {
      returnDocument : "after",
    });
    if (!updateTasks) {
      return res.status(404).json({message: "user not found"})
    }
    res.json(updateTasks);

  } catch (err) {
    return res.status(400).json({message: "failed to update user"})
  }
}

//delete task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deleteTask = await Tasks.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    return res.status(400).json({message: "Failed to delete task" });
  }
}