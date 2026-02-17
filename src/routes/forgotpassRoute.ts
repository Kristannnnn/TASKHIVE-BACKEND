import { forgotpass } from "@/controllers/userController";
import express from "express";

const forgotpassrouter = express.Router();
//user routes
forgotpassrouter.post("/", forgotpass);

export default forgotpassrouter;
