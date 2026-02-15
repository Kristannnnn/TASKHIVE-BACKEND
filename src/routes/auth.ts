import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/Users";
import { generateToken } from "../utils/error/generateToken";
import { token } from "morgan";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
    
     const user = await User.findOne({ email });
     if(!user) return res.status(404).json({ message: "user not found" });

     const token = generateToken(user._id.toString());
    
     res.json({ token });
});

export default router;