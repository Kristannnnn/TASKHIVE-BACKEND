import { logInUser } from "@/controllers/logInController";
import express from "express";

const loginRouter = express.Router();

//login route
loginRouter.post("/", logInUser);

export default loginRouter;
