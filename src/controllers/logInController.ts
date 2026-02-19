import User from "@/models/Users";
import { generateToken } from "@/utils/error/generateToken";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

// Log in user
export const logInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const { token, expiresIn } = generateToken(user._id.toString());
    res.json({
      message: "Login successful",
      token,
      expiresIn,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(400).json({ message: "Error logging in user" });
  }
};
