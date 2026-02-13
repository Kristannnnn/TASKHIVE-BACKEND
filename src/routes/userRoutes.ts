import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "@/controllers/userController";
import express from "express";

const router = express.Router();
//user routes
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
