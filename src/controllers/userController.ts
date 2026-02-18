import User from "@/models/Users";
import { ForgotPassword } from "@/utils/forgotpassword";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const userDataWithHash = { username, email, passwordHash };
    const savedUser = await User.create(userDataWithHash);
    res.status(201).json({
      message: " Registered Successfully",
      user: {
        username: savedUser.username,
        email: savedUser.email,
      },
    });
    if (!savedUser) {
      return res.status(400).json({ message: "User creation failed" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
  } catch (err) {
    res.status(400).json({ error: err, message: "Error fetching users" });
  }
};

// Get single user
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err, message: "Error fetching user" });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const updateData: any = {};
    if (username) updateData.username = username;
    if (email) updateData.email = email;
    if (password) {
      const passwordHash = await bcrypt.hash(password, 10);
      updateData.passwordHash = passwordHash;
    }
    const updateUser = await User.findByIdAndUpdate(req.params.id, updateData, {
      returnDocument: "after",
    });
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updateUser);
  } catch (err) {
    res.status(400).json({ error: err, message: "Error updating user" });
  }
};


//Delete user

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ message: "user not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err, message: "Error deleting user" });
  }
};

//reset pass
export const forgotpass = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email is required" });
    }
    const resetlink = `http://localhost:5173/changepassword?id=${user._id}`;
    await ForgotPassword(user.email, resetlink);
    // Always return same message
    return res.status(200).json({
      message: "If the email exists, a reset link has been sent.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
