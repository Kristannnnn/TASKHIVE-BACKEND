import { forgotpass } from "@/controllers/userController";
import express from "express";

const forgotpassrouter = express.Router();
//forgot pass route
forgotpassrouter.post("/", forgotpass);

export default forgotpassrouter;
